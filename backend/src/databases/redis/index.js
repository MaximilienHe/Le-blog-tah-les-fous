'use strict'

const redisStore = require('koa-redis')({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT)
})

module.exports = redisStore;
