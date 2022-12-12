import { validationResult } from 'express-validator'

import {
  createUser,
  hashPassword, 
  checkUsername,
  checkPassword,
  createTokenPair
} from './auth.service.js'
import { verifyRefreshToken } from '../tokens/tokens.service.js'

export async function signup(request, response) {
  const validationErrors = validationResult(request)
  
  // handle request validation results
  if (!validationErrors.isEmpty()) return response.status(400).json({
    error: validationErrors.errors[0].msg
  })
  
  const { username, password } = request.body

  const [hashedPassword, hashError] = await hashPassword(password)

  if (hashError) return response.status(500).json({error: 'Failed to hash password.'})

  const [user, userError] = await createUser(username, hashedPassword)

  if (userError) return response.status(500).json({error: 'Failed to create new user.'})
  
  return response.status(200).json({message: `Successfully created user: ${user.username}`})
}

export async function login(request, response) {
  const validationErrors = validationResult(request)
  
  // handle request validation results
  if (!validationErrors.isEmpty()) return response.status(400).json({
    error: validationErrors.errors[0].msg
  })

  const { username, password } = request.body

  const [userResult, userError] = await checkUsername(username)
  
  if (userError) return response.status(500).json({
    error: 'Failed to fetch user.'
  })
  
  if (userResult === null) return response.status(400).json({
    error: 'Invalid username.'
  })

  const [
    passwordResult,
    passwordError
  ] = await checkPassword(password, userResult.password)

  if (passwordError) return response.status(500).json({
    error: 'Failed to check password.'
  })

  if (passwordResult === false) return response.status(400).json({
    error: 'Invalid password.'
  })

  // generate auth tokens
  const [tokens, tokenError] = createTokenPair(userResult.id)

  if (tokenError) return response.status(500).json({
    error: 'Error creating token pair.'
  })

  if (tokens === null) return response.status(500).json({
    error: 'No tokens created.'
  })

  return response.status(200).json(tokens)
}

export function refreshTokens(request, response) {
  const { refreshToken } = request.body

  if (!refreshToken) return response.status(403).json({
    error: 'No refresh token provided.'
  })

  const [data, verifyError] = verifyRefreshToken(refreshToken)

  if (verifyError && verifyError.name === 'TokenExpiredError') {
    return response.status(401).json({error: 'Refresh token expired.'})
  }

  // TODO: handle invalid tokens in some unique way 
  if (verifyError) return response.status(403).json({
    error: 'Invalid refresh token.'
  })

  const [tokens, createError] = createTokenPair(data.sub)

  if (createError) return response.status(500).json({
    error: 'Error creating token pair.'
  })

  if (tokens === null) return response.status(500).json({
    error: 'No tokens created.'
  })

  return response.status(200).json(tokens)
}