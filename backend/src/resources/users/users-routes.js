const Router = require('@koa/router');
const userRouter = new Router({
    prefix: '/users'
});

require('./sign-up').push(userRouter); // POST /users
require('./favorites/add-favorite').push(userRouter); // POST /users/favorites
require('./favorites/get-favorites').push(userRouter); // GET /users/favorites

module.exports = userRouter.routes();