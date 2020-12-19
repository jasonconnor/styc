import bcrypt from 'bcryptjs';

import User from '../models/UserModel.js';

export const register = async (req, res) => {
  let userExists = null;

  try {
    userExists = await User.findOne({username: req.body.username});
  } catch(error) {
    return res.status(500).json({
      message: 'Encountered an error while checking if that user exists.',
      error: error
    });
  }

  if (userExists) {
    return res.status(409).json({
      message: 'A user already exists with that username.'
    });
  }

  let hashedPassword = null;

  try {
    hashedPassword = await bcrypt.hash(req.body.password, 10);
  } catch(error) {
    console.log(error)
    return res.status(500).json({
      message: 'Encountered an error while hashing the password.',
      error: error
    });
  }

  const newUser = new User({
    username: req.body.username,
    password: hashedPassword
  });

  let user = null;

  try {
    user = await newUser.save();
  } catch(error) {
    return res.status(500).json({
      message: 'Encountered an error while trying to save new user.',
      error: error
    });
  }

  return res.status(200).json({
    message: `Successful registered user: ${user.username}`
  });
}

export const login = async (req, res) => {

}

export const logout = (req, res) => {

}

export const refreshToken = (req, res) => {

}