const config = require('../../config')
const mime = require('mime')
const sharp = require('sharp')

const DEFAULTS_IMG_MAX_WIDTH = 1200;

function handleImage(req, res, filePath, fileMimetype){
  const image = sharp(filePath);
  let width, height;

  image
   .metadata()
   .then((metadata) => {
      if(req.params.width && req.params.height){
        width = parseInt(req.params.width)
        height = parseInt(req.params.height)
      }else if(req.params.width){
        width = parseInt(req.params.width)
      }else if(metadata.width < DEFAULTS_IMG_MAX_WIDTH){
        width = metadata.width
      }else{
        width = 400;
      }
   })
  .then((metadata) => {
    image
      .resize(width, height)
      .toBuffer((err, buf) => {
        if(err) return console.log(err)
        res.contentType(fileMimetype)
        return res.send(buf);
      })
  })
}

function handleVideo(req, res, filePath, fileMimetype) {
    return res.sendFile(filePath)
}

const serveCtrl = (req, res) => {
  const filename = req.params.filename
  const filePath = config.PATH_DIR + '/' + filename
  const fileMimetype = mime.lookup(filePath)

  const imageMimetypes = [
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
    'image/svg+xml',
    'image/tiff'
  ]

  const videoMimetypes = [
    'video/quicktime',
    'video/webm',
    'video/mp4',
    'video/x-msvideo',
    'video/x-ms-wmv'
  ]

  if( imageMimetypes.includes(fileMimetype) ) {
    handleImage(req, res, filePath, fileMimetype)
  }else if( videoMimetypes.includes(fileMimetype) ) {
    handleVideo(req, res, filePath, fileMimetype)
  }else{
    return res.sendFile(filePath)
  }
}

module.exports = serveCtrl