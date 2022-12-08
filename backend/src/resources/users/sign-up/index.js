const Joi = require('joi');

const validate = require('../../../middlewares/validate-middleware');
const Users = require('../../../databases/mysql').models.Users;

const schema = Joi.object({
    username: Joi.string()
        .trim()
        .required()
        .alphanum()
        .min(4)
        .max(40)
        .messages({
            'any.required': 'Username is required',
            'string.empty': 'Username is required'
        }),

    email: Joi.string()
        .email()
        .trim()
        .lowercase()
        .required()
        .messages({
            'any.required': 'Email is required',
            'string.empty': 'Email is required',
            'string.email': 'Please enter a valid email address',
        }),

    password: Joi.string()
        .trim()
        .min(6)
        .max(50)
        .required()
        .messages({
            'any.required': 'Password is required',
            'string.empty': 'Password is required',
            'string.min': 'Password must be 6-50 characters',
            'string.max': 'Password must be 6-50 characters'
        }),
});

async function validator(ctx, next) {
    const { username, email } = ctx.validatedData;

    const isUserExists = await Users.exists(username, email);

    if (isUserExists) {
        ctx.response.status = 409;
    } else {
        await next();
    }
}

async function handler(ctx) {
    const { username, email, password } = ctx.validatedData;

    Users.create({ username: username, email: email, password: password });

    ctx.response.status = 200;
}

module.exports.push = (router) => {
    router.post('/', validate(schema), validator, handler);
}