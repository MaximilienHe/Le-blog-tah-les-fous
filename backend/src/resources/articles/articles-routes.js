'use strict'


const Router = require('@koa/router');
const articlesRouter = new Router({
    prefix: '/articles'
});

require('./create-article').push(articlesRouter); // POST articles/
require('./get-articles').push(articlesRouter); // GET articles?params...

require('./comments/create-comment').push(articlesRouter); // POST articles/:article_id/comments
require('./comments/get-comments').push(articlesRouter); // GET articles/:article_id/comments

require('./likes/add-like').push(articlesRouter); // POST articles/:article_id/likes
require('./likes/get-likes-count').push(articlesRouter); // GET articles/:article_id/likes
require('./likes/remove-like').push(articlesRouter); // DELETE articles/:article_id/likes/current


module.exports = articlesRouter.routes();