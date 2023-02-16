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

    return [userResult, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    return [hashedPassword, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function checkUsername(username) {
  try {
    const user = await UsersModel.findOne({username}).select('+password')

    return [user, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function checkPassword(passwordInput, hashedPassword) {
  try {
    const result = await bcrypt.compare(passwordInput, hashedPassword)

    return [result, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export function createTokenPair(user) {
  const [accessToken, accessTokenError] = createAccessToken(user)
  const [refreshToken, refreshTokenError] = createRefreshToken(user)

  if (accessTokenError) return [null, accessTokenError]
  if (refreshTokenError) return [null, refreshTokenError]

  return [{accessToken, refreshToken}, null]
}