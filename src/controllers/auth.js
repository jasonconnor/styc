import bcrypt from 'bcryptjs'

import User from '../models/user.js'

export const register = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username});

    if (user) {
      return res.status(400).json({
        message: 'User exists.'
      });
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword
      });

      await newUser.save();

      return res.status(200).json({
        message: 'Successfully added user.'
      });
    }
  } catch(error) {
    console.log(error);
    return res.status(500).json({
      message: 'Unable to register user.'
    });
  }
}