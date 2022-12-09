'use strict'

const Router = require('@koa/router');
const sessionsRouter = new Router({
    prefix: '/sessions'
});

require('./sign-in').push(sessionsRouter); // POST sessions/
require('./sign-out').push(sessionsRouter); // DELETE sessions/current/

module.exports = sessionsRouter.routes();