const path = require('path')

const uploadCtrl = (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.')
  let fileUploaded = req.files.fileUploaded
  const destPath = '/tmp/' + fileUploaded.name;

  fileUploaded.mv(destPath, (err) => {
    if (err) return res.status(500).send(err)
    res.send('File uploaded!')
  })
}

module.exports = uploadCtrl