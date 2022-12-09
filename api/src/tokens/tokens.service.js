import jwt from 'jsonwebtoken'

const accessTokenExpiry = () => { return Math.floor(Date.now() / 1000) + (60 * 5) }
const refrshTokenExpiry = () => { return Math.floor(Date.now() / 1000) + (3600 * 24) }

export function createAccessToken(user) {
  try {
    const accessToken = jwt.sign({
      sub: user,
      exp: accessTokenExpiry()
    }, process.env.ACCESS_SECRET)

    return [accessToken, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export function createRefreshToken(user) {
  try {
    const refreshToken = jwt.sign({
      sub: user,
      exp: refrshTokenExpiry()
    }, process.env.REFRESH_SECRET)

    return [refreshToken, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export function verifyAccessToken(token) {
  try {
    const data = jwt.verify(token, process.env.ACCESS_SECRET)
    return [data, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export function verifyRefreshToken() {}