const connect = require('./config/db')
const express = require('express')

// Import Routes
const appRouter = require('./app/routes/app')
const adminRouter = require('./app/routes/admin')
const accountRouter = require('./app/routes/account')
const newsRouter = require('./app/routes/news')


const app = express()

// Connect to the database
connect;

app.use(express.json({ extended: false }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Headers',
    'Content-Type'
  )
  next()
})

// Routes
app.use('/', appRouter)
app.use('/admin', adminRouter)
app.use('/account', accountRouter)
app.use('/news', newsRouter)

app.listen(80, function() {
  console.log('Server started.')
})