import cors from 'cors'
import express from 'express'

import { AuthRouter } from './auth/auth.router.js'
import { UsersRouter } from './users/users.router.js'
import { AccountRouter } from './account/account.router.js'

export const App = express()

// app-level middleware
App.use(express.json())
App.use(cors(process.env.CLIENT_URI))

// routes
App.use('/auth', AuthRouter)
App.use('/users', UsersRouter)
App.use('/account', AccountRouter)