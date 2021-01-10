import express from 'express';

import UserController from '../controllers/UserController.js';

import Authenticate from '../middleware/Authenticate.js';

const UserRouter = express.Router();

UserRouter.get('/account', Authenticate.checkToken, UserController.getCurrentUser);

export default UserRouter;