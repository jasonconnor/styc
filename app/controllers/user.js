const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const User = require('../models/user')

exports.register = async function(req, res) {
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() })
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
      return res.status(422).json(error)
    }
  }
}