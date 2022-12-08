'use strict'

const redisStore = require('koa-redis')({
    host: process.env.REDISHOST,
    password: process.env.REDISPASSWORD,
    port: process.env.REDISPORT
})

module.exports = redisStore;
