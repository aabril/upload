const fs = require('fs');



const listCtrl = (req, res) => {
  const testFolder = '/tmp/'
  const files = []

  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      files.push
    })
  })

  res.render('../views/list.html', files)
}

module.exports = listCtrl