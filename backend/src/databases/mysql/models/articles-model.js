'use strict'

const { Model, Op } = require('sequelize');
const Models = require('../index').models;

module.exports = (Types, sequelize) => {
    class Articles extends Model {
        static async fetchAllArticles() {
            let fetchedArticles = await Articles.findAll();

            return fetchedArticles;
        }

        static async exists(slug) {
            const isArticleExists = await Articles.findOne({
                where: {
                    slug: slug
                }
            });

            return (isArticleExists) ? true : false;
        }

        static async fetchBySlug(slug) {
            const fetchedArticle = await Articles.findOne({
                where: {
                    slug: slug
                }
            });

            return fetchedArticle;
        }

        static async fetchByCategoryName(category) {

            let fetchedArticles = await Articles.findAll({
                where: {
                    category: category
                }
            });

            return fetchedArticles;
        }
    }

    Articles.init(
        {
            id: {
                type: Types.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },

            title: {
                type: Types.STRING(100),
                allowNull: false,
            },

            extract: {
                type: Types.TEXT,
                allowNull: false,
            },

            slug: {
                type: Types.STRING,
                allowNull: false,
                unique: true,
            },

            img: {
                type: Types.TEXT,
                allowNull: false,
                isUrl: true,
            },

            tags: {
                type: Types.STRING,
                allowNull: true,
                get() {
                    let splittedTags = this.getDataValue('tags').split(';');
                    splittedTags = splittedTags.map(tag => {
                        return tag.trim();
                    });

                    return splittedTags;
                }
            },

            category: {
                type: Types.STRING,
                allowNull: true,
                defaultValue: "actualites",
            },

            content: {
                type: Types.TEXT,
                allowNull: false,
            },

            author: {
                type: Types.STRING(40),
                allowNull: false,
            },

            creation_date: {
                type: Types.TEXT,
                allowNull: false,
            }
        },
        {
            sequelize,
            createdAt: false,
            updatedAt: false,
        }
    );

    return Articles;
}