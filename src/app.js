const express = require('express')
const path = require('path')
const fileuploadMiddleware = require('express-fileupload')

const indexCtrl = require('./controllers/indexCtrl')
const uploadCtrl = require('./controllers/uploadCtrl')
const listCtrl = require('./controllers/listCtrl')
const serveCtrl = require('./controllers/serveCtrl')

const app = express();
app.use(fileuploadMiddleware())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.get('/', indexCtrl)
app.post('/upload', uploadCtrl)
app.get('/list', listCtrl)
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
