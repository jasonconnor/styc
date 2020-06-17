const connect = require('./config/db')
const express = require('express')


// Import Routes
const appRouter = require('./src/routes/app')
const adminRouter = require('./src/routes/admin')
const accountRouter = require('./src/routes/account')
const newsRouter = require('./src/routes/news')


const app = express()

// Connect to the database
connect;

// Routes
app.use('/', appRouter)
app.use('/admin', adminRouter)
app.use('/account', accountRouter)
app.use('/news', newsRouter)



app.listen(80, function() {
    console.log('Server started.')
})