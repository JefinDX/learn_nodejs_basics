const path = require('path')

const express = require('express')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
// const RedisStore = require('connect-redis')(session)

// const config = require('../config')
const app = express()

app.use(express.urlencoded({
  extended: false
}))

require('./authentication').init()

//not using redis in this example
// app.use(session({
//   store: new RedisStore({
//     url: config.redisStore.url
//   }),
//   secret: config.redisStore.secret,
//   resave: false,
//   saveUninitialized: true
// }))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', exphbs.engine({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname))

require('./user').init(app)
require('./note').init(app)

module.exports = app
