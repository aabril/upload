const express = require('express')
const app = express();

const config = require('../config.json')
const loadRoutes = require('./routes');
const setupExpress = require('./express');

const fs = require('fs')
const pathDir = '/tmp/uploads'
if (!fs.existsSync(pathDir)){
    fs.mkdirSync(pathDir)
}

setupExpress(app)
loadRoutes(app, express)

const port = process.env.PORT || config.PORT
app.listen(port, function () {
  console.log('Example app listening on port ' + port + "!")
})
