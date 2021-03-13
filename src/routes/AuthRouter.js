import express from 'express';

import upload from '../middleware/upload.js';
import Validate from '../middleware/Validate.js';
import AuthController from '../controllers/AuthController.js';

const AuthRouter = express.Router();

// GET Routes
AuthRouter.get('/logout', AuthController.logout);

// POST Routes
AuthRouter.post('/login', upload.none(), Validate.login, AuthController.login);
AuthRouter.post('/register', Validate.register, AuthController.register);

export default AuthRouter;