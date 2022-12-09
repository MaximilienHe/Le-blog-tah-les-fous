const xss = require('xss');

function sanitize() {
    console.log(xss("<script></script><h1><h1><img src=\"pute\"></>"))
}

sanitize()

module.exports = sanitize;