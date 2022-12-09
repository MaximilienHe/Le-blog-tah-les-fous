'use strict'

const Joi = require('joi');

const validate = require('../../../../middlewares/validate-middleware');
const hasRole = require('../../../../middlewares/permissions-middleware');

const Articles = require('../../../../databases/mysql').models.Articles;
const Likes = require('../../../../databases/mysql').models.Likes;

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

    const isUserAlreadyLikingArticle = await Likes.isUserAlreadyLikingArticle(ctx.session.id, article_id);
    if (isUserAlreadyLikingArticle) {
        ctx.response.status = 409;
        return;
    }

    const isArticleExists = await Articles.findByPk(article_id);
    if (isArticleExists) {
        await next();
    } else {
        ctx.response.status = 404;
    }
}

async function handler(ctx) {
    const { article_id, content } = ctx.validatedData;

    Likes.create({
        UserId: ctx.session.id,
        ArticleId: article_id,
    });

    ctx.response.status = 200;
}

module.exports.push = (router) => {
    router.post('/:article_id/likes', hasRole(["user", "admin"]), validate(schema), validator, handler);
}