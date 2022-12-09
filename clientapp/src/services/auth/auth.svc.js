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