import { validationResult } from 'express-validator'

import {
  createUser,
  hashPassword, 
  checkUsername,
  checkPassword,
  createTokenPair
} from './auth.service.js'
import { createStatsForUser } from '../stats/stats.service.js'

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

  const [stats, statsError] = await createStatsForUser(user.id)

  if (statsError) return response.status(500).json({
    error: 'Failed to create stats for user.'
  })

  console.log(stats)
  
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
    error: 'No tokens provided.'
  })

  console.log(tokens)

  return response.status(200).json({ok: true})
}