'use strict'

const Joi = require('joi');

const validate = require('../../../middlewares/validate-middleware');
const Articles = require('../../../databases/mysql').models.Articles;

const schema = Joi.object({
    slug: Joi.string()
        .trim()
        .lowercase()
        .required()
        .messages({
            'any.required': 'Slug is required',
            'string.empty': 'Slug is required'
        }),
});

async function validator(ctx, next) {
    const { slug } = ctx.validatedData;

    if (await Articles.exists(slug)) {
        await next();
    } else {
        ctx.response.status = 404;
    }
}

async function handler(ctx) {
    const { slug } = ctx.validatedData;

    const fetchedArticle = await Articles.fetchBySlug(slug);

    ctx.response.status = 200;
    ctx.response.body = {
        data: fetchedArticle
    };
}

module.exports.push = (router) => {
    router.get('/slug/:slug', validate(schema), validator, handler);
}