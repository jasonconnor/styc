import axios from "axios";
import { authService } from "./services/auth/auth.svc";

export const initialize = () => {
  // Add JWT to requests
  axios.interceptors.request.use((request) => {
    request.headers.common['Authorization'] = `JWT ${authService.getToken()}`;
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