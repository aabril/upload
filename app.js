const express = require('express')
const fileuploadMiddleware = require('express-fileupload')

const indexCtrl = require('./controllers/indexCtrl')
const uploadCtrl = require('./controllers/uploadCtrl')
//const listCtrl = require('./controllers/listCtrl')

const app = express();
app.use(fileuploadMiddleware())

app.get('/', indexCtrl)
app.post('/upload', uploadCtrl)
//app.get('/list', listCtrl)


const port = process.env.PORT || '3000'
app.listen(port, function () {
  console.log('Example app listening on port #{port}!')
})
