import axios from "axios"
import { APIURL } from "./app.svc"
import { refreshUserToken } from "../auth/auth.svc"

/**
 * Wrapper method that makes a GET request and retries once 
 * if a 401 status code is returned.
 * Expects only a route string as an argument, 
 * the API domain is prepended within the method.
 * @param {string} requestRoute The string for the API route. e.g. "/profile"
 * @returns A response from the API for the request.
 */
export const getRequestWithRetry = async (requestRoute) => {
  const requestURL = `${APIURL}${requestRoute}`
  let response = await axios.get(requestURL)

  if (response.status === 401) {
    await refreshUserToken()
    response = await axios.get(requestURL)
  }

  return response
}