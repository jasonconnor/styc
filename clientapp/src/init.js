import axios from "axios";
import { authService } from "./services/auth/auth.svc";

export const initialize = () => {
  // Add JWT to requests
  axios.interceptors.request.use((request) => {
    const accessToken = authService.getAccessToken();
    if (accessToken) {
      request.headers.Authorization = `JWT ${authService.getAccessToken()}`;
    }

    return request;
  });

  // IDK
  axios.interceptors.response.use((response) => {
    return response;
  },
  async (error) => {
    console.error(error);
  })
};