const path = require('path')

const indexCtrl = (req, res) => {
  const filePath = path.resolve(__dirname, '../views/index.html')
  res.sendFile(filePath);
}

module.exports = indexCtrl