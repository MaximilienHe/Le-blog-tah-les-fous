const xss = require('xss');

function sanitize() {
    console.log(xss("<script></script><h1><h1><img src=\"test\"></>"))
}

sanitize()

module.exports = sanitize;
