import express from 'express';

import * as AuthController from '../controllers/auth.js';

const AuthRouter = express.Router();

AuthRouter.post('/register', AuthController.register);

export default AuthRouter