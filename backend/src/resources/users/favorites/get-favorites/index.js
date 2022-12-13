'use strict'

const Joi = require('joi');

const validate = require('../../../../middlewares/validate-middleware');
const Articles = require('../../../../databases/mysql').models.Articles;
const Favorites = require('../../../../databases/mysql').models.Favorites;

const hasRole = require('../../../../middlewares/permissions-middleware');

async function validator(ctx, next) {
    const favoritesArticles = await Favorites.findAll({
        where: {
            UserId: ctx.session.id
        },

        include: [{
            model: Articles,
        }]
    });

    const fetchedFavoritesArticles = favoritesArticles.Article;

    if (fetchedFavoritesArticles) {
        ctx.fetchedFavoritesArticles = fetchedFavoritesArticles;
        await next();
    } else {
        ctx.response.status = 404;
        ctx.response.body = {
            error: "No favorites..."
        }
    }
}

async function handler(ctx) {

    ctx.response.status = 200;
    ctx.response.body = {
        data: ctx.fetchedFavoritesArticles,
    };
}

module.exports.push = (router) => {
    router.get('/favorites', hasRole(["user", "admin"]), validator, handler);
}