const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/styc'

const connect = async function() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Connected to the styc database.')
    } catch(err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connect();