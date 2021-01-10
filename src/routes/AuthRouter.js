import express from 'express';

import AuthController from '../controllers/AuthController.js';
import Validate from '../middleware/Validate.js'

const AuthRouter = express.Router();

// GET Routes
AuthRouter.get('/logout', AuthController.logout);

// POST Routes
AuthRouter.post('/login', Validate.login, AuthController.login);
AuthRouter.post('/register', Validate.register, AuthController.register);

export default AuthRouter;