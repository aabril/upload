const path = require('path')
const fs = require('fs')


const uploadCtrl = (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.')
  let fileUploaded = req.files.fileUploaded

  const dir = path.resolve(__dirname, '../uploads')
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, 0744)
  }

  const destPath = dir + '/' + fileUploaded.name;

  fileUploaded.mv(destPath, (err) => {
    if (err) return res.status(500).send(err)
    res.send('File uploaded!')
  });

}

module.exports = uploadCtrl