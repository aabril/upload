const fs = require('fs');

const listCtrl = (req, res) => {
  const pathDir = '/tmp/uploads'
  const files = fs.readdirSync(pathDir);
  res.send(files)
}

module.exports = listCtrl
