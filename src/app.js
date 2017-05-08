const express = require('express')
const path = require('path')
const fileuploadMiddleware = require('express-fileupload')
const bodyParser = require('body-parser')
const session = require('express-session')

const indexCtrl = require('./controllers/indexCtrl')
const uploadCtrl = require('./controllers/uploadCtrl')
const listCtrl = require('./controllers/listCtrl')
const serveCtrl = require('./controllers/serveCtrl')
const loginCtrl = require('./controllers/loginCtrl')

const app = express();
app.use(fileuploadMiddleware())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}))

app.get('/', indexCtrl)
app.post('/upload', uploadCtrl)
app.get('/list', listCtrl)
app.get('/login', loginCtrl.get)
app.post('/login', loginCtrl.post)
app.use('/assets', express.static('src/assets'))
app.get('/:filename', serveCtrl)

const fs = require('fs')
const pathDir = '/tmp/uploads'
if (!fs.existsSync(pathDir)){
    fs.mkdirSync(pathDir)
}

const port = process.env.PORT || '3000'
app.listen(port, function () {
  console.log('Example app listening on port ' + port + "!")
})
