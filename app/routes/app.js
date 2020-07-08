const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

const User = require('../models/user')
const userController = require('../controllers/user')

router.get('/', (req, res) => {
  res.send('App Index')
})

router.post('/register', [
  body('username')
    .custom(async value => {
      let user = await User.findOne({ username: value })
      if (user) {
        return Promise.reject('Username is already registered')
      }
    }).bail()
    .escape(),
  body('email')
    .optional({ nullable: true }).bail()
    .custom(async value => {
      let user = await User.findOne({ email: value })
      if (user) {
        return Promise.reject('Email is already registered')
      }
    }).bail()
    .normalizeEmail(),
  body('password')
    .escape()
], userController.register)

module.exports = router;