import jwt from 'jsonwebtoken';


export default class AccessToken {
  now = Math.floor(Date.now() / 1000);
  issuedAt = now;
  expiresIn = now + 60;
  
  static create = (user) => {
    return new Promise((resolve, reject) => {
      jwt.sign({
        iat: issuedAt,
        exp: expiresIn,
        iss: 'localhost',
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

  static validate = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, 'secretx', (error, decoded) => {
        // TODO: Handle token errors
        if (error) {
          reject(error);
        }

        resolve(decoded);
      });
    });
  }
}

