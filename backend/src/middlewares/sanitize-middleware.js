const xss = require('xss');

function sanitize() {
    return async (ctx, next) => {
        console.log("Test");

        await next();
    }
}

module.exports = sanitize;