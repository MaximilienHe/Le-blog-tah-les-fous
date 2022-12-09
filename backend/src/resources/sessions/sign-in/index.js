'use strict'

const Joi = require('joi');

const validate = require('../../../middlewares/validate-middleware');
const Users = require('../../../databases/mysql').models.Users;

const securityUtils = require('../../../utils/security-utils');

const schema = Joi.object({
    username: Joi.string()
        .trim()
        .required()
        .alphanum()
        .messages({
            'any.required': 'Username is required',
            'string.empty': 'Username is required'
        }),

    password: Joi.string()
        .trim()
        .required()
        .messages({
            'any.required': 'Password is required',
            'string.empty': 'Password is required'
        }),
});

async function validator(ctx, next) {
    const { username, password } = ctx.validatedData;

    const fetchedUser = await Users.fetchByUsername(username);

    const isPasswordMatching = await securityUtils.compareStrWithHash(password, fetchedUser.password);

    if (fetchedUser === null || !isPasswordMatching) {
        ctx.response.status = 409;
    } else {
        ctx.loggedOnUser = fetchedUser;
        await next();
    }
}


async function handler(ctx) {
    const { id, username, role } = ctx.loggedOnUser;

    if (ctx.session.isNew) {
        ctx.session.isAuthenticated = true;
        ctx.session.id = id;
        ctx.session.username = username;
        ctx.session.role = role;

        console.log("User logegd in !");
    }

    ctx.response.status = 200;
    ctx.response.body = {
        data: {
            id: id,
            role: role,
            is_authenticated: true,
        }
    };
}

module.exports.push = (router) => {
    router.post('/', validate(schema), validator, handler);
}