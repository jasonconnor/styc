import axios from "axios";
import { authService } from "./services/auth/auth.svc";

export const initialize = () => {
  // Add JWT to requests
  axios.interceptors.request.use(
    (request) => {
      const accessToken = authService.getAccessToken();
      if (accessToken) {
        request.headers.Authorization = `JWT ${authService.getAccessToken()}`;
      }

      return request;
    },
    async (error) => {
      console.log("--- blah ---")
    }
  );

  // Response handler
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.message) {
        console.log(error.message);
      }

      return error.response;
    }
  );
};