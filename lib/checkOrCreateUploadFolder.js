const path = require('path')
const fs = require('fs')

function checkOrCreateUploadFolder(){
  const dir = path.resolve(__dirname, '../uploads')
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, 0744)
  }
}

module.exports = checkOrCreateUploadFolder;