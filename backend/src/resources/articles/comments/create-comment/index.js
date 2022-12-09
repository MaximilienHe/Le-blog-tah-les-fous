'use strict'

const Joi = require('joi');

const validate = require('../../../../middlewares/validate-middleware');
const hasRole = require('../../../../middlewares/permissions-middleware');

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

    content: Joi.string()
        .trim()
        .required()
        .messages({
            'any.required': 'Content is required',
            'string.empty': 'Content is required'
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
    const { article_id, content } = ctx.validatedData;

    Comments.create({
        content: content,
        ArticleId: article_id,
        UserId: ctx.session.id,
        creation_date: new Date().toLocaleDateString(),
        author: ctx.session.username
    });

    ctx.response.status = 200;
}

module.exports.push = (router) => {
    router.post('/:article_id/comments', hasRole(["user", "admin"]), validate(schema), validator, handler);
}