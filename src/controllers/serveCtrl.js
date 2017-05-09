const config = require('../../config')
const mime = require('mime')
const sharp = require('sharp')

const serveCtrl = (req, res) => {
  const filename = req.params.filename
  const filePath = config.PATH_DIR + '/' + filename
  const fileMimetype = mime.lookup(filePath)

  if(req.params.width && req.params.height){
    const width = parseInt(req.params.width)
    const height = parseInt(req.params.height)

    sharp(filePath)
      .resize(width, height)
      .toBuffer((err, buf) => {
        if(err) return console.log(err)
        res.contentType(fileMimetype)
        return res.send(buf);
      })

  }else{
    return res.sendFile(filePath)
  }

}

module.exports = serveCtrl