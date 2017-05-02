const express = require('express')
const fileuploadMiddleware = require('express-fileupload')

const uploadCtrl = require('./controllers/uploadCtrl')
const indexCtrl = require('./controllers/indexCtrl')
const listCtrl = require('./controllers/listCtrl')

const app = express();
app.use(fileuploadMiddleware())

app.get('/', indexCtrl)
app.get('/list', listCtrl)
app.post('/upload', uploadCtrl)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})