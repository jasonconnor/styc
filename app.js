const connect = require('./config/db')
const express = require('express')

const app = express()

// Connect to the database
connect;

// Routes
app.use('/', require('./src/routes/app'))
app.use('/admin', require('./src/routes/admin'))
app.use('/account', require('./src/routes/account'))
app.use('/news', require('./src/routes/news'))

app.listen(80, function() {
    console.log('Server started.')
})