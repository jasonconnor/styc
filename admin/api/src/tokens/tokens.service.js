import jwt from 'jsonwebtoken'

function getAccessTokenExpiry() { 
  return Math.floor(Date.now() / 1000) + (60 * 5) 
}

function getRefreshTokenExpiry() { 
  return Math.floor(Date.now() / 1000) + (3600 * 24)
}

export function createAccessToken(user) {
  try {
    const accessToken = jwt.sign({
      sub: user,
      exp: getAccessTokenExpiry()
    }, process.env.ACCESS_SECRET)

    return {accessToken}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export function createRefreshToken(user) {
  try {
    const refreshToken = jwt.sign({
      sub: user,
      exp: getRefreshTokenExpiry()
    }, process.env.REFRESH_SECRET)

    return {refreshToken}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export function verifyAccessToken(token) {
  try {
    const data = jwt.verify(token, process.env.ACCESS_SECRET)
    return {data}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export function verifyRefreshToken(token) {
  try { 
    const data = jwt.verify(token, process.env.REFRESH_SECRET)
    return {data}
  } catch (error) {
    console.error(error)
    return {error}
  }
}