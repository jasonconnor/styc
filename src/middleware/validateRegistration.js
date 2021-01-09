import {body} from 'express-validator';

// TODO: Merge validators
const validateRegistration = [
  body('username')
    .exists({checkFalsy: true})
      .withMessage('Username is required to create an account.')
      .bail()
    .isString()
      .withMessage('Invalid data type submitted for Username.')
      .bail()
    .trim()
    .isLength({min: 4})
      .withMessage('Username must be at least 4 characters long.')
      .bail()
    .isLength({max: 20})
      .withMessage('Username cannot be longer than 20 characters.')
      .bail()
    .escape()
    .matches(/^[A-Za-z0-9-_]+$/)
      .withMessage('Username cannot include special characters.')
      .bail(),
  body('password')
    .exists({checkFalsy: true})
      .withMessage('Password is required to create an account.')
      .bail()
    .isString()
      .withMessage('Invalid data type submitted for Password.')
      .bail()
    .trim()
    .isLength({min: 6})
      .withMessage('Password must be at least 6 characters long.')
      .bail()
    .isLength({max: 20})
      .withMessage('Password cannot be longer than 20 characters')
      .bail()
    .escape()
    .matches(/^[A-Za-z0-9!@#$%^&*()]+$/)
      .withMessage('Password can only contain certain special characters.')
      .bail()
];

export default validateRegistration;