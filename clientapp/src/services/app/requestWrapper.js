import axios from "axios";
import { refreshUserToken } from "../auth/auth.svc";

export const getRequestWithRetry = async (route) => {
  let response = await axios.get(route);

  if (response.status === 401) {
    await refreshUserToken();
    response = await axios.get(route)
  }

  return response;
}