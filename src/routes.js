const indexCtrl = require('./controllers/indexCtrl')
const uploadCtrl = require('./controllers/uploadCtrl')
const listCtrl = require('./controllers/listCtrl')
const serveCtrl = require('./controllers/serveCtrl')
const loginCtrl = require('./controllers/loginCtrl')

const loadRoutes = (app, express) => {
  app.get('/', indexCtrl)
  app.post('/upload', uploadCtrl)
  app.get('/list', listCtrl)
  app.get('/login', loginCtrl.get)
  app.post('/login', loginCtrl.post)
  app.use('/assets', express.static('src/assets'))
  app.get('/:filename', serveCtrl)
}

module.exports = loadRoutes