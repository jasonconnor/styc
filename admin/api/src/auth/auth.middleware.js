import { body } from 'express-validator'

import { verifyAccessToken } from '../tokens/tokens.service.js'

export function checkTokens(request, response, next) {
  const header = request.headers.authorization
  const token = header && header.split(' ')[1]

  if (!token) return response.status(400).json({error: 'Authorization required.'})

  const [data, tokenError] = verifyAccessToken(token)

  if (tokenError && tokenError.name === 'TokenExpiredError') {
    return response.status(401).json({error: 'Token expired.'})
  }

  if (tokenError) return response.status(403).json({error: 'Invalid access token.'})

  request.user = data.sub

  return next()
}

export const validateLogin = [
  body('username')
    .exists()
    .withMessage('Username is required.')
    .isString()
    .trim()
    .escape(),
  body('password')
    .exists()
    .withMessage('Password is required.')
    .isString()
    .trim()
    .escape()
]

export const validateSignup = [
  body('username')
    .exists()
    .withMessage('Username is required.')
    .isString()
    .trim()
    .escape()
    .isLength({min: 3})
    .withMessage('Username must be at least 3 characters.')
    .isLength({max: 15})
    .withMessage('Username cannot be longer than 15 characters.'),
  body('password')
    .exists()
    .withMessage('Password is required.')
    .isString()
    .trim()
    .escape()
    .isLength({min: 6})
    .withMessage('Password must be at least 6 characters.')
    .isLength({max: 20})
    .withMessage('Password cannot be longer than 20 characters.')
]