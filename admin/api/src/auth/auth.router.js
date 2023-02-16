import { Router } from 'express'

import { login, refreshTokens, signup } from './auth.controller.js'
import { validateLogin, validateSignup } from './auth.middleware.js'

export const AuthRouter = Router()

// POST Routes
AuthRouter.post('/login', validateLogin, login)
AuthRouter.post('/signup', validateSignup, signup)
AuthRouter.post('/refresh', refreshTokens)