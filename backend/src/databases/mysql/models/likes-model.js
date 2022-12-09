'use strict'

const { Model, Op } = require('sequelize');


module.exports = (Types, sequelize) => {
    class Likes extends Model {
        static async isUserAlreadyLikingArticle(userId, articleId) {
            const isUserAlreadyLikingArticle = await Likes.findOne({
                where: {
                    UserId: userId,
                    ArticleId: articleId
                }
            });

            return (isUserAlreadyLikingArticle) ? true : false;
        }
    }

    Likes.init(
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

    return Likes;
}