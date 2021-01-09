import express from 'express';

import UserController from '../controllers/UserController.js';

import authenticate from '../middleware/authenticate.js';

const UserRouter = express.Router();

UserRouter.get('/account', authenticate, UserController.getCurrentUser);

export default UserRouter;