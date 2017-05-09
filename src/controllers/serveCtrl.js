const config = require('../../config')
const mime = require('mime')
const sharp = require('sharp')

const serveCtrl = (req, res) => {
  const filename = req.params.filename
  const filePath = config.PATH_DIR + '/' + filename
  const fileMimetype = mime.lookup(filePath)
  let width, height;

  const imageMimetypes = [
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
    'image/svg+xml',
    'image/tiff'
  ];

  if(imageMimetypes.includes(fileMimetype)){
    const image = sharp(filePath);
  }else{
    return res.sendFile(filePath);
  }
  
  const image = sharp(filePath);

  image
   .metadata()
   .then((metadata) => {
      console.log(metadata)
      if(req.params.width && req.params.height){
        width = parseInt(req.params.width)
        height = parseInt(req.params.height)
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

  // sharp(filePath)
  //   .resize(width, height)
  //   .toBuffer((err, buf) => {
  //     if(err) return console.log(err)
  //     res.contentType(fileMimetype)
  //     return res.send(buf);
  //   })

}

module.exports = serveCtrl