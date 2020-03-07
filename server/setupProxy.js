const proxy = require('http-proxy-middleware')

module.exports = function(app) {

    app.user(proxy("/api", { target: "https://localhost:3000"}))
}



