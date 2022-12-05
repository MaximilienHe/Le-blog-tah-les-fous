'use strict'

const Joi = require('joi');

const validate = require('../../../middlewares/validate-middleware');
const Articles = require('../../../databases/mysql').models.Articles;

const schema = Joi.object({
    category: Joi.string()
        .trim()
        .lowercase()
        .required()
        .messages({
            'any.required': 'Category is required',
            'string.empty': 'Category is required',
        })
});

async function validator(ctx, next) {
    const { category } = ctx.validatedData;

    const fetchedArticles = await Articles.fetchByCategoryName(category);

    if (fetchedArticles && fetchedArticles.length > 0) {
        ctx.fetchedArticlesCategory = fetchedArticles;
        await next();
    } else {
        ctx.response.status = 404;
    }
}

async function handler(ctx) {
    ctx.response.status = 200;
    ctx.response.body = {
        data: ctx.fetchedArticlesCategory
    };
}

module.exports.push = (router) => {
    router.get('/category/:category', validate(schema), validator, handler);
}