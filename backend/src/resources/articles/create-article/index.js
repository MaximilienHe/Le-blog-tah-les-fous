'use strict'

const Joi = require('joi');

const validate = require('../../../middlewares/validate-middleware');
const hasRole = require('../../../middlewares/permissions-middleware');

const Articles = require('../../../databases/mysql').models.Articles;

const schema = Joi.object({
    title: Joi.string()
        .trim()
        .required()
        .max(100)
        .messages({
            'any.required': 'Title is required',
            'string.empty': 'Title is required'
        }),

    extract: Joi.string()
        .trim()
        .required()
        .messages({
            'any.required': 'Extract is required',
            'string.empty': 'Extract is required',
        }),

    slug: Joi.string()
        .trim()
        .required()
        .messages({
            'any.required': 'Slug is required',
            'string.empty': 'Slug is required'
        }),

    img: Joi.string()
        .trim()
        .required()
        .uri()
        .messages({
            'any.required': 'Img is required',
            'string.empty': 'Img is required',
            'string.uri': 'Img must be an uri',
        }),

    tags: Joi.string()
        .trim()
        .required()
        .lowercase()
        .messages({
            'any.required': 'Tags is required',
            'string.empty': 'Tags is required',
        }),

    category: Joi.string()
        .trim()
        .lowercase()
        .messages({
            'string.empty': 'Category is required',
        }),

    content: Joi.string()
        .trim()
        .required()
        .messages({
            'any.required': 'Content is required',
            'string.empty': 'Content is required',
        }),
});


async function validator(ctx, next) {
    const { slug } = ctx.validatedData;

    const isArticleExists = await Articles.exists(slug);
    if (isArticleExists) {
        ctx.response.status = 409;
        ctx.response.body = {
            error: "Article with this slug already exists...",
        };
    } else {
        await next();
    }
}

async function handler(ctx) {
    const { title, extract, slug, img, tags, category, content } = ctx.validatedData;

    Articles.create({
        title: title,
        extract: extract,
        slug: slug,
        img: img,
        tags: tags,
        category: category,
        content: content,
        author: ctx.session.username,
        creation_date: new Date().toLocaleDateString()
    });

    ctx.response.status = 200;
}

module.exports.push = (router) => {
    router.post('/', hasRole(["admin"]), validate(schema), validator, handler);
}