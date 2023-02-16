import { Router } from 'express'

import { checkTokens } from '../auth/auth.middleware.js'
import { validateNewScore } from './scores.middleware.js'
import { saveScore, highscores } from './scores.controller.js'

export const ScoresRouter = Router()

// GET Routes
ScoresRouter.get('/', highscores)

// POST Routes
ScoresRouter.post('/', checkTokens, validateNewScore, saveScore)