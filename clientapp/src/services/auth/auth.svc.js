import axios from "axios";
import { APIURL } from "../app/app.svc";

const accessToken = "accessToken",
      refreshToken = "refreshToken";

export const authService = {
  getAccessToken: () => {
    return localStorage.getItem(accessToken);
  },
  setAccessToken: (token) => {
    localStorage.setItem(accessToken, token);
  },
  getRefreshToken: () => {
    return localStorage.getItem(refreshToken);
  },
  setRefreshToken: (token) => {
    localStorage.setItem(refreshToken, token);
  }
}

export const refreshUserToken = async () => {
  const params = {
    refreshToken: authService.getRefreshToken()
  }

  try {
    let resp = await axios.post(`${APIURL}/auth/refresh`, params)

    const { accessToken, refreshToken } = resp.data;

    authService.setAccessToken(accessToken);
    authService.setRefreshToken(refreshToken);
  }
  catch (err) {
    console.error('An error occurred while trying to refresh the token.', err?.error ?? 'Issue unknown.')
    
    throw err?.error ?? 'Issue unknown.'
  }
}