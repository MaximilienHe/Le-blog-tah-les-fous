'use strict'

const Joi = require('joi');

const validate = require('../../../middlewares/validate-middleware');
const Articles = require('../../../databases/mysql').models.Articles;

const schema = Joi.object({
    category: Joi.string()
        .trim()
        .lowercase()
        .messages({
            'string.empty': 'Category is empty',
        }),

    slug: Joi.string()
        .trim()
        .lowercase()
        .messages({
            'string.empty': 'Slug is empty',
        }),

    title: Joi.string()
        .trim()
        .lowercase()
        .messages({
            'string.empty': 'Title is empty',
        })
});

async function validator(ctx, next) {
    const fetchedArticles = await Articles.fetchAllArticles();

    if (fetchedArticles.length > 0 && fetchedArticles) {
        ctx.fetchedArticles = fetchedArticles;
        await next();
    } else {
        ctx.response.status = 404;
    }
}

async function filter(ctx, next) {
    const filters = ctx.query;

    if (Object.keys(filters).length > 0) {
        const filteredArticles = ctx.fetchedArticles.filter(article => {
            let isValid = true;
            for (let key in filters) {
                if (key == "title") {
                    isValid = isValid && article[key].includes(filters[key]);
                } else {
                    isValid = isValid && article[key] == filters[key];
                }
            }
            return isValid;
        })

        if (filteredArticles.length > 0) {
            ctx.fetchedArticles = filteredArticles;
            await next();
        } else {
            ctx.response.status = 404;
        }

    } else {
        await next();
    }
}

async function handler(ctx) {
    ctx.response.status = 200;
    ctx.response.body = {
        data: ctx.fetchedArticles
    };
}

module.exports.push = (router) => {
    router.get('/', validate(schema), validator, filter, handler);
}