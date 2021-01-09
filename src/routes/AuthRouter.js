import express from 'express';

import * as AuthController from '../controllers/AuthController.js';
import validateLogin from '../middleware/validateLogin.js';
import validateRegistration from '../middleware/validateRegistration.js';

const AuthRouter = express.Router();

// GET Routes
AuthRouter.get('/logout', AuthController.logout);

// POST Routes
AuthRouter.post('/login', validateLogin, AuthController.login);
AuthRouter.post('/register', validateRegistration, AuthController.register);

export default AuthRouter;