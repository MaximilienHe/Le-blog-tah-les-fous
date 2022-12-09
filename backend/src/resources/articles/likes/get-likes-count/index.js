'use strict'

const Joi = require('joi');

const validate = require('../../../../middlewares/validate-middleware');

const Likes = require('../../../../databases/mysql').models.Likes;
const Articles = require('../../../../databases/mysql').models.Articles;

const schema = Joi.object({
    article_id: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required()
        .messages({
            'any.required': 'Article id is required',
        }),
});


async function validator(ctx, next) {
    const { article_id } = ctx.validatedData;

    const isArticleExists = await Articles.findByPk(article_id);
    if (isArticleExists) {
        await next();
    } else {
        ctx.response.status = 404;
    }
}

async function handler(ctx) {
    const { article_id } = ctx.validatedData;

    const count = await Likes.count({
        where: {
            ArticleId: article_id
        }
    })

    ctx.response.status = 200;
    ctx.response.body = {
        data: count,
    };
}

module.exports.push = (router) => {
    router.get('/:article_id/likes', validate(schema), validator, handler);
}