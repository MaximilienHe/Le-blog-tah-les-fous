'use strict'

const redisStore = require('koa-redis')({
    host: process.env.REDISHOST || process.env.REDIS_LOCAL_HOST,
    password: process.env.REDISPASSWORD,
    port: process.env.REDISPORT || 6379,
})

module.exports = redisStore;
