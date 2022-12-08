const validator = require('validator')

function hasRole(roles) {
    return async function (ctx, next) {
        const tokenAccess = ctx.cookies.get(process.env.SESSION_KEY);
        console.log(tokenAccess);

        if (roles.includes(ctx.session.role)) {
            await next();
        } else {
            ctx.response.status = 401;
        }
    }
}

module.exports = hasRole;