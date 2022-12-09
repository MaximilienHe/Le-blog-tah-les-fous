'use strict'

async function validator(ctx, next) {
    if (!ctx.session.isNew) {
        await next();
    } else {
        ctx.response.status = 404;
    }
}

async function handler(ctx) {
    ctx.session = null;
    ctx.response.status = 200;
}

module.exports.push = (router) => {
    router.delete('/current', validator, handler);
}