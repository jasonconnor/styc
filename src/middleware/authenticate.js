import AccessToken from '../utils/AccessToken.js';

// TODO: Class-ify this

// TODO: Assign appropriate HTTP Response codes
export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'No token was submitted.'
    });
  }

  const accessToken = authHeader.split(' ')[1];

  let user = null;

  try {
    user = await AccessToken.validate(accessToken);
  } catch(error) {
    return res.status(400).json({
      message: 'Failed to validate token.',
      error: error.message
    })
  }

  req.user = user;
  next();
}

export default authenticate