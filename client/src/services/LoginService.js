export default class LoginService {
  static login = (data) => {
    const formData = new FormData();

    formData.append('username', data.username);
    formData.append('password', data.password);


    // Configure POST request options
    const fetchOptions = {
      method: 'POST',
      body: formData,
    };

    return new Promise(async (resolve, reject) => {
      try {
        // Sends the POST Request
        // Catch network errors and thow them to the catch block
        const response = await fetch(
          'http://localhost:80/api/login',
          fetchOptions
        ).catch(() => {
          throw new Error('Encountered a network error. Try again soon.');
        });

        // Convert Response body to JSON
        const result = await response.json();

        // If the result is empty, throw a new error to the catch block
        // TODO: make this work for  empty objs: {}, as this is 
        //       what we are checking for anyway
        if (!result) {
          throw new Error('Received empty response from the server.');
        }

        // If the server returns a response with an error property,
        // throw that error message to the catch block
        if (result.hasOwnProperty('error')) {
          throw new Error(result.error);
        }

        // Resolve the Promise
        resolve(result);
      } catch (error) {
        // Reject the Promise with the friendly error
        reject(error.message);
      }
    });
  }
}