'use strict'

const { Model, Op } = require('sequelize');


module.exports = (Types, sequelize) => {
    class Favorites extends Model {
        static async isArticleAlreadyFavorite(articleId) {
            const isArticleAlreadyInFavorite = await Favorites.findOne({
                where: {
                    ArticleId: articleId
                }
            });

            return (isArticleAlreadyInFavorite) ? true : false;
        }
    }

    Favorites.init(
        {
            id: {
                type: Types.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
        },
        {
            sequelize,
            createdAt: false,
            updatedAt: false,
        }
    );

    return Favorites;
}