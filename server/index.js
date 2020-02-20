const server = require('./server')
const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cookieParser());

app.post("api/sendMail", (req, res) => {

  console.log(req.body)

  
  
  })


server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
