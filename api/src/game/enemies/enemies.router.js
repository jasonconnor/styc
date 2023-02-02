import { Router } from 'express'

import { findAll, random } from './enemies.controller'

export const EnemiesRouter = Router()

EnemiesRouter.get('/', findAll)
EnemiesRouter.get('/random', random)