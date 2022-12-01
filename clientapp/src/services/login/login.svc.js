import axios from "axios"
import { APIURL } from "../app/app.svc"

export const attemptLogin = async (username, password) => {
  const params = {
    username,
    password
  }

  try {
    let resp = await axios.post(`${APIURL}/auth/login`, params)
    console.log(resp)
    window.location.href = '/'
  }
  catch (err) {
    console.error('An error occurred while trying to login', err)
    if (err.error)
      throw err.error
  }
}

export const registerAccount = async (username, password) => {
  const params = {
    username,
    password
  }

  try {
    let resp = await axios.post(`${APIURL}/auth/signup`, params)
    console.log(resp)
    window.location.href = '/Login'
  }
  catch (err) {
    console.error('An error occurred while trying to register', err)
    if (err.error)
      throw err.error
  }
}