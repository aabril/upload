const pathDir = '/tmp/uploads'

const serveCtrl = (req, res) => {
  const filename = req.params.filename;
  const filePath = pathDir + '/' + filename;
  res.sendFile(filePath)
}

module.exports = serveCtrl