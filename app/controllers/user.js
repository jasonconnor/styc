const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator')

const User = require('../models/user')

exports.register = [
  body('username')
    .isLength({ min: 3 }).trim()
      .withMessage('Username must be at least 3 characters long.')
    .isLength({ max: 15 }).trim()
      .withMessage('Username can only be 15 characters long')
    .isAlphanumeric()
      .withMessage('Username cannot contain any special characters')
    .custom(async value => {
      const user = await User.findOne({ username: value })
      if (user) {
        return Promise.reject('Username is already registered')
      }
    })
    .escape(),
  body('email')
    .optional({ checkFalsy: true })
    .isEmail()
      .withMessage('Email is invalid')
    .custom(async value => {
      const user = await User.findOne({ email: value })
      if (user) {
        return Promise.reject('Email is already registered')
      }
    })
    .normalizeEmail(),
  body('password')
    .isLength({ min: 5 }).trim()
      .withMessage('Password must be at least 5 characters long.')
    .isLength({ max: 20 }).trim()
      .withMessage('Password can only be 20 characters long.')
    .isAlphanumeric()
      .withMessage('Password cannot contain any special characters')
    .escape(),
], async function(req, res) {
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    console.log(errors.array())
  } else {
    try {
      const { username, email, password } = req.body
      const user = new User({ username, email, password })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
    
      await user.save()
      
      res.send('success')
    } catch(error) {
      console.error(error)
      return next(error)
    }
  }
}