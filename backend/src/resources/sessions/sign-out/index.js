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
}

module.exports.push = (router) => {
    router.delete('/current', validator, handler);
}