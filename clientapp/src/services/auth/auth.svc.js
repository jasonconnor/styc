const accessToken = "accessToken";

export const authService = {
  getToken: () => {
    return localStorage.getItem(accessToken);
  },
  setToken: (token) => {
    localStorage.setItem(accessToken, token);
  }
}