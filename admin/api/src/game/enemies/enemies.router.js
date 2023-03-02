import { Router } from 'express'

import { create, findAll, random } from './enemies.controller.js'

export const EnemiesRouter = Router()

EnemiesRouter.get('/', findAll)
EnemiesRouter.get('/random', random)
EnemiesRouter.post('/', create)