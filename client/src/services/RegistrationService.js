import ErrorMessage from 'models/messaging/ErrorMessages';

/* Harness:
import RegistrationSerivce from 'services/RegistrationService;

RegstrationService.registerUser(data)
*/

/**
 * Service - Handles registration requests & responses with API
 */
export default class RegistrationSerivce {
  static registerUser = (data) => {
    const formData = new FormData();

    formData.append('username', data.username);
    formData.append('password', data.password);

    const postRequestOptions = {
      method: 'POST',
      body: formData,
    };

    return new Promise(async (resolve, reject) => {
      try {
        /* Sends the POST Request */
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URI}/api/register`,
          postRequestOptions
        ).catch(() => {
          throw new Error(ErrorMessage.NetworkError);
        });

        const responseJson = await response.json();

        /* Check for errors */
        // Check for empty response {}
        if (!responseJson || Object.keys(responseJson).length === 0) {
          throw new Error(ErrorMessage.EmptyResponse);
        }

        if (responseJson.hasOwnProperty('error')) {
          throw new Error(responseJson.error);
        }

        resolve(responseJson);
      } catch (error) {
        // Reject the Promise with the friendly error
        reject(error.message);
      }
    });
  };
}
