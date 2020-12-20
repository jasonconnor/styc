import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';

import User from '../models/UserModel.js';

export const register = async (req, res) => {
  // Check for validation errors
  let registrationError = validationResult(req);

  if (!registrationError.isEmpty()) {
    return res.status(422).json({
      message: 'Unable to validate new user.',
      error: registrationError.array()[0].msg 
    });
  }

  // Check if username is already in use
  let userExists = null;

  try {
    userExists = await User.findOne({username: req.body.username});
  } catch(error) {
    return res.status(500).json({
      message: 'Encountered an error while checking if that user exists.',
      error: error.message
    });
  }

  if (userExists) {
    return res.status(409).json({
      message: 'A user already exists with that username.'
    });
  }

  // Hash the password from the request body
  let hashedPassword = null;

  try {
    hashedPassword = await bcrypt.hash(req.body.password, 10);
  } catch(error) {
    return res.status(500).json({
      message: 'Encountered an error while hashing the password.',
      error: error.message
    });
  }

  // Create new user and save to database
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
      error: error.message
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