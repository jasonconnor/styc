const connect = require('./config/db')
const express = require('express')

const app = express()

// Connect to the database
connect;

app.get('/', function(req, res) {
    res.send('Success')
})

app.listen(80, function() {
    console.log('Server started.')
})