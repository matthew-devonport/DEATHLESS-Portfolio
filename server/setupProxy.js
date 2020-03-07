const proxy = require('http-proxy-middleware')

module.exports = function(app) {

    app.user(proxy("/api", { target: "https://deathless-studio.netlify.com/#/"}))
}

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

