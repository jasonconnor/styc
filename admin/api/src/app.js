import cors from 'cors'
import express from 'express'

import { AuthRouter } from './auth/auth.router.js'
import { UsersRouter } from './users/users.router.js'
import { ScoresRouter } from './scores/score.router.js'
import { AccountRouter } from './account/account.router.js'
import { EnemiesRouter } from './game/enemies/enemies.router.js'
import { ArticlesRouter } from './articles/articles.router.js'
import { ElementsRouter } from './game/elements/elements.router.js'

export const App = express()

// app-level middleware
App.use(express.json())
App.use(cors(process.env.CLIENT_URI))

// routes
App.use('/auth', AuthRouter)
App.use('/users', UsersRouter)
App.use('/scores', ScoresRouter)
App.use('/account', AccountRouter)
App.use('/enemies', EnemiesRouter)
App.use('/articles', ArticlesRouter)
App.use('/elements', ElementsRouter)