'use strict'

const bcrypt = require('bcrypt');

exports.hashStr = async (str) => {
    const salt = await bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    return bcrypt.hashSync(str, salt);
}

exports.compareStrWithHash = async (str, hash) => {
    const match = await bcrypt.compare(str, hash);
    return match ? true : false;
}