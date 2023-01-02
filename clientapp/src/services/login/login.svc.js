import axios from "axios"
import { APIURL } from "../app/app.svc"
import { authService } from "../auth/auth.svc"

export const attemptLogin = async (username, password) => {
  const params = {
    username,
    password
  }

  try {
    let resp = await axios.post(`${APIURL}/auth/login`, params)

    const { accessToken, refreshToken } = resp.data

    authService.setAccessToken(accessToken)
    authService.setRefreshToken(refreshToken)

    window.location.href = '/'
  }
  catch (err) {
    console.error('An error occurred while trying to login.', err?.error ?? 'Issue unknown.')
    
    throw err?.error ?? 'Issue unknown.'
  }
}

export const registerAccount = async (username, password) => {
  const params = {
    username,
    password
  }

  try {
    await axios.post(`${APIURL}/auth/signup`, params)

    window.location.href = '/Login'
  }
  catch (err) {
    console.error('An error occurred while trying to register.', err?.error ?? 'Issue unknown.')
    
    throw err?.error ?? 'Issue unknown.'
  }
}