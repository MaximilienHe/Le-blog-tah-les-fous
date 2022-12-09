'use strict'

const Joi = require('joi');

const validate = require('../../../../middlewares/validate-middleware');
const Articles = require('../../../../databases/mysql').models.Articles;
const Comments = require('../../../../databases/mysql').models.Comments;

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

    const fetchedArticle = await Articles.findOne({
        where: {
            id: article_id
        },

        include: [{
            model: Comments,
            attributes: ['id', 'content', 'author', 'creation_date']
        }]
    });

    const fetchedComments = fetchedArticle.Comments;

    if (fetchedComments.length > 0 && fetchedComments) {
        ctx.fetchedComments = fetchedComments;
        await next();
    } else {
        ctx.response.status = 404;
        ctx.response.body = {
            error: "No comments associate to this article..."
        }
    }
}

async function handler(ctx) {

    ctx.response.status = 200;
    ctx.response.body = {
        data: ctx.fetchedComments,
    };
}

module.exports.push = (router) => {
    router.get('/:article_id/comments', validate(schema), validator, handler);
}