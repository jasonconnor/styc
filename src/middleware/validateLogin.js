import {body} from 'express-validator'

// TODO: Merge validators
const validateLogin = [
  body('username')
    .exists({checkFalsy: true})
      .withMessage('Username is required.')
      .bail()
    .isString()
      .withMessage('Invalid data type submitted for Username.')
      .bail()
    .trim()
    .escape(),
  body('password')
    .exists({checkFalsy: true})
      .withMessage('Password is required.')
      .bail()
    .isString()
      .withMessage('Invalid data type submitted for Password.')
      .bail()
    .trim()
    .escape()
];

export default validateLogin;