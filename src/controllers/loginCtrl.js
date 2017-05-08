const path = require('path')

const loginCtrlGet = (req, res) => {
  res.render('login')
}

const loginCtrlPost = (req, res) => {
  if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
    req.session.authenticated = true
    return res.redirect('/')
  } else {
    return res.redirect('/login')
  }
}

module.exports.get = loginCtrlGet
module.exports.post = loginCtrlPost