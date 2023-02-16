import { Router } from 'express'

import { getAccount } from './account.controller.js'
import { checkTokens } from '../auth/auth.middleware.js'

export const AccountRouter = Router()

// GET Routes
AccountRouter.get('/', checkTokens, getAccount)