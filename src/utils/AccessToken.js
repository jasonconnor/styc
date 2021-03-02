import jwt from 'jsonwebtoken';

export default class AccessToken {
  // TODO: Move true jwt secret to .env
  static create = (user) => {
    return new Promise((resolve, reject) => {
      const currentTime = Math.floor(Date.now() / 1000);

      jwt.sign({
        iss: 'localhost',
        iat: currentTime,
        exp: currentTime + (60 * 60),
        sub: user.id,
        aud: user.role
      }, 'secret', (error, token) => {
        if (error) {
          reject(error);
        }
  
        resolve(token);
      })
    });
  }

  // TODO: Move true jwt secret to .env
  static validate = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, 'secret', (error, decoded) => {
        if (error) {
          reject(error);
        }

        resolve(decoded);
      });
    });
  }
}