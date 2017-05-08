const path = require('path')
const config = require('../../config.json')

const slug = require('slug')
slug.defaults.mode ='rfc3986'

const uploadCtrl = (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.')
  let fileUploaded = req.files.fileUploaded
  const destPath = config.PATH_DIR + "/" + slug(fileUploaded.name, {remove: null})

  fileUploaded.mv(destPath, (err) => {
    if (err) return res.status(500).send(err)
    return res.redirect('/')
  })
}

module.exports = uploadCtrl