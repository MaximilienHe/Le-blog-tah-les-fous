const validator = require('validator')

function hasRole(roles) {
    return async function (ctx, next) {
        console.log("Role : " + ctx.session.role);
        if (roles.includes(ctx.session.role)) {
            await next();
        } else {
            ctx.response.status = 401;
        }
    }
}

module.exports = hasRole;