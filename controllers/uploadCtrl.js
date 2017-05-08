const path = require('path')
const pathDir = '/tmp/uploads'
const slug = require('slug')
slug.defaults.mode ='rfc3986'

const uploadCtrl = (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.')
  let fileUploaded = req.files.fileUploaded
  const destPath = pathDir + "/" + slug(fileUploaded.name, {remove: null})

  fileUploaded.mv(destPath, (err) => {
    if (err) return res.status(500).send(err)
    res.send('File uploaded!')
  })
}

module.exports = uploadCtrl