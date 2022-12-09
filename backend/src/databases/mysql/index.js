'use strict';

require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.MYSQLDATABASE || process.env.MYSQL_LOCAL_DATABASE,
    process.env.MYSQLUSER || process.env.MYSQL_LOCAL_USER,
    process.env.MYSQLPASSWORD || process.env.MYSQL_LOCAL_PASSWORD,
    {
        host: process.env.MYSQLHOST || process.env.MYSQL_LOCAL_HOST,
        port: process.env.MYSQLPORT || 3306,
        dialect: 'mysql',
        logging: false,
    }
)

sequelize
    .authenticate()
    .then(() => {
        console.log("[+] Connection with MySQL database has been established successfully!")
    })
    .catch((err) => {
        console.error("[-] Unable to initialize database connection...")
    })

const Users = require('./models/users-model')(Sequelize, sequelize);
const Articles = require('./models/articles-model')(Sequelize, sequelize);
const Comments = require('./models/comments-model')(Sequelize, sequelize);
const Favorites = require('./models/favorites-model')(Sequelize, sequelize);
const Likes = require('./models/likes-model')(Sequelize, sequelize);

Users.hasMany(Comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Users.hasMany(Favorites, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Users.hasMany(Likes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Articles.hasMany(Comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Articles.hasMany(Likes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Comments.belongsTo(Users);
Comments.belongsTo(Articles);

Favorites.belongsTo(Users);
Favorites.belongsTo(Articles);

Likes.belongsTo(Users);
Likes.belongsTo(Articles);

// Users.create({ username: "spiut", email: "spiut@uca.fr", password: "mmef456$", role: "admin" });

sequelize.sync();

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    models: {
        Users,
        Articles,
        Comments,
        Favorites,
        Likes,
    }
}

module.exports = db;