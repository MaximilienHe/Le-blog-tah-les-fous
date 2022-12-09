'use strict'

const { Model, Op } = require('sequelize');


module.exports = (Types, sequelize) => {
    class Comments extends Model {

    }

    Comments.init(
        {
            id: {
                type: Types.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },

            content: {
                type: Types.TEXT,
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

    return Comments;
}