const path = require('path')

const indexCtrl = (req, res) => {
  if(req.session.authenticated){
    return res.render('index')
  }else{
    return res.redirect('login')
  }
}

module.exports = indexCtrl