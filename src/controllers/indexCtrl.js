const fs = require('fs')
const path = require('path')
const config = require('../../config.json')

function getFileInfo(filename){
  const fileInfo = fs.lstatSync(config.PATH_DIR + "/" + filename)
  const output = {
    "filename": filename,
    "directory": fileInfo.isDirectory(),
    "size": fileInfo.size,
    "atime": fileInfo.atime,
    "ctime": fileInfo.ctime,
    "mtime": fileInfo.mtime,
    "birthtime": fileInfo.birthtime
  }
  return output
}

function sortByCreatedDatetime(files, reverse = false){
  return files.sort( (a,b) => {
    return (reverse) ? new Date(b.ctime) - new Date(a.ctime) : new Date(a.ctime) - new Date(b.ctime)
  });
};

const getFiles = () => {
  const filenames = fs.readdirSync(config.PATH_DIR);
  const filesOutput = sortByCreatedDatetime(filenames.map(getFileInfo))
  return filesOutput
}

const indexCtrl = (req, res) => {
  if(req.session.authenticated){
    return res.render('index', { files: getFiles() })
  }else{
    return res.redirect('login')
  }
}

module.exports = indexCtrl