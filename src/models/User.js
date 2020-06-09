const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        max: 20
    },
    password: {
        type: String,
        required: true,
        max: 20,
        min: 5
    }
})

module.exports = mongoose.model('User', UserSchema)