import { Router } from 'express'

import { findAll } from './articles.controller.js'

export const ArticlesRouter = Router()

ArticlesRouter.get('/', findAll)