const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const User = require('../models/user')

exports.register = async (req, res) => {
  let errors = validationResult(req)

  if(!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() })
  } else {
    try {
      let { username, email, password } = req.body
      let user = new User({ username, email, password })

      let salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
    
      await user.save()
      
      res.send('User registered.')
    } catch(error) {
      console.error(error)
      return res.status(422).json(error)
    }
  }
}