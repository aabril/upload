const path = require('path')
const config = require('../../config.json')

const loginCtrlGet = (req, res) => {
  res.render('login')
}

const loginCtrlPost = (req, res) => {
  const username = process.env.LOGIN_USER || config.LOGIN_USER;
  const password = process.env.LOGIN_PASS || config.LOGIN_PASS;

  if (req.body.username && req.body.username === username && req.body.password && req.body.password === password) {
    req.session.authenticated = true
    return res.redirect('/')
  } else {
    return res.redirect('/login')
  }
}

module.exports.get = loginCtrlGet
module.exports.post = loginCtrlPost