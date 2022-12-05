'use strict'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const helmet = require('koa-helmet');
const cors = require('@koa/cors');

const userRoutes = require('./src/resources/users/users-routes');
const sessionsRoutes = require('./src/resources/sessions/sessions-routes');
const articlesRoutes = require('./src/resources/articles/articles-routes');

const sessionConfig = require('./src/config/session-config')

const app = new Koa();

app.use(cors());
app.use(session(sessionConfig, app));
app.use(helmet());
app.use(bodyParser());

app.use(userRoutes);
app.use(sessionsRoutes);
app.use(articlesRoutes);

app.listen(3000, () => {
    console.log("RESTful API listening on port 3000...");
})