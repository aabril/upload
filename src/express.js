const path = require('path')
const fileuploadMiddleware = require('express-fileupload')
const bodyParser = require('body-parser')
const session = require('express-session')
const config = require('../config.json');

const configExpress = (app) => {
  app.use(fileuploadMiddleware())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }))

  app.set('view engine', 'pug')
  app.set('views', path.join(__dirname, '/views'));

  app.use(session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }))
}

module.exports = configExpress