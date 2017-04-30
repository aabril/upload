const express = require('express')
const fileUpload = require('express-fileupload')
const uploadCtrl = require('./controllers/uploadCtrl')

const app = express();
app.use(fileUpload())


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/views/index.html');
})


app.post('/upload', uploadCtrl);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})