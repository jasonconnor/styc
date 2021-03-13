import AccessToken from '../utils/AccessToken.js';

export default class Authenticate {
  // TODO: Assign appropriate HTTP Response codes
  static checkToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({
        message: 'No token was submitted.'
      });
    }
  
    const accessToken = authHeader.split(' ')[1];
  
    let token = null;
  
    try {
      token = await AccessToken.validate(accessToken);
    } catch(error) {
      // TODO: Handle token errors
      return res.status(400).json({
        message: 'Failed to validate token.',
        error: error.message
      })
    }

    req.token = token;
    next();
  }
}