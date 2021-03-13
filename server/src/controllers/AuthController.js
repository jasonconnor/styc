import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';

import User from '../models/UserModel.js';
import AccessToken from '../utils/AccessToken.js';

export default class AuthController {
  // TODO: Assign appropriate HTTP Response Codes
  static register = async (req, res) => {
    // Check for validation errors
    let registrationError = validationResult(req);
  
    if (!registrationError.isEmpty()) {
      return res.status(422).json({
        message: 'Unable to validate request.',
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
      message: `Successfully registered user: ${user.username}`
    });
  }

  // TODO: Assign appropriate HTTP Response Codes
  static login = async (req, res) => {
    // Check for validation errors
    let loginErrors = validationResult(req);

    if (!loginErrors.isEmpty()) {
      return res.status(422).json({
        error: loginErrors.array()[0].msg 
      });
    }
    
    let user = null;

    // TODO: make this look nicer
    try {
      user = await User.findOne({username: req.body.username}).select('+password');
    } catch(error) {
      return res.status(500).json({
        error: 'Failed to search database for user.',
        cause: error.message
      });
    }

    if (!user) {
      return res.status(400).json({
        error: 'Invalid username or password.'
      })
    }

    let password = null;

    try {
      password = await bcrypt.compare(req.body.password, user.password);
    } catch(error) {
      return res.status(500).json({
        error: 'Failed to verify password.',
        cause: error.message
      });
    }

    if (!password) {
      return res.status(400).json({
        error: 'Invalid username or password.'
      });
    }

    let accessToken = null;

    try {
      accessToken = await AccessToken.create(user)
    } catch(error) {
      return res.status(500).json({
        error: 'Failed to create access token',
        cause: error.message
      })
    }
    
    return res.status(200)
      .header('Authentication', accessToken)
      .json({
        message: 'Successfully logged in.'
      });
  }

  static logout = (req, res) => {

  }

  static refreshToken = (req, res) => {

  }
}