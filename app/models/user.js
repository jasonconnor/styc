const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    max: 15,
    min: 2
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 20,
    min: 5
  },
  topScore: {
    type: Number,
    default: 0
  },
  topLevel: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('User', UserSchema)