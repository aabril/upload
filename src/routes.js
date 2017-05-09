const indexCtrl = require('./controllers/indexCtrl')
const uploadCtrl = require('./controllers/uploadCtrl')
const serveCtrl = require('./controllers/serveCtrl')
const loginCtrl = require('./controllers/loginCtrl')

const loadRoutes = (app, express) => {
  app.get('/', indexCtrl)
  app.post('/upload', uploadCtrl)
  app.get('/login', loginCtrl.get)
  app.post('/login', loginCtrl.post)
  app.use('/assets', express.static('src/assets'))
  app.get('/:filename', serveCtrl)
  app.get('/:filename/:width', serveCtrl)
  app.get('/:filename/:width/:height', serveCtrl)
}

module.exports = loadRoutes