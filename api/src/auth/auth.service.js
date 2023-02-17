import bcrypt from 'bcrypt'

import { 
  createAccessToken,
  createRefreshToken
} from '../tokens/tokens.service.js'
import { UsersModel } from '../users/users.model.js'
import { StatsModel } from '../stats/stats.model.js'

export async function createUser(username, password) {
  try {
    const user = new UsersModel({username, password})
    const stats = new StatsModel({user: user.id})

    await stats.save()

    user.stats = stats.id
    const userResult = await user.save()

    return {userResult}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    return {hashedPassword}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function getUserByUsername(username) {
  try {
    const user = await UsersModel.findOne({username}).select('+password')

    return {user}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function checkPassword(passwordInput, hashedPassword) {
  try {
    const passwordResult = await bcrypt.compare(passwordInput, hashedPassword)

    return {passwordResult}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export function createTokenPair(user) {
  const {accessToken, error: accessTokenError} = createAccessToken(user)
  const {refreshToken, error: refreshTokenError} = createRefreshToken(user)

  if (accessTokenError) return {error: accessTokenError}
  if (refreshTokenError) return {error: refreshTokenError}

  return {tokens: {accessToken, refreshToken}}
}