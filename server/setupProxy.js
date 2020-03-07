const proxy = require('http-proxy-middleware')

module.exports = function(app) {

    app.user(proxy("/api", { target: "http://deathless-studio.netlify.com/"}))
}

