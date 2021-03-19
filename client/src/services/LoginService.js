import ErrorMessage from 'models/ErrorMessages';

export default class LoginService {
  static login = (data) => {

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
          `${process.env.SERVER_URI}/api/login`,
          postRequestOptions
        ).catch(() => { // Fails to connect to API
          throw new Error(ErrorMessage.NetworkError);
        });

        const responseJson = await response.json();

        /* Check for errors */
        // Checking for empty response {}
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
  }
}