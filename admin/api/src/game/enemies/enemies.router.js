import { Router } from 'express'

import { create, findAll, findById, random } from './enemies.controller.js'

export const EnemiesRouter = Router()

EnemiesRouter.get('/', findAll)
EnemiesRouter.get('/random', random)

// Admin
EnemiesRouter.post('/', create)
EnemiesRouter.get('/:id', findById)
EnemiesRouter.put('/:id', findAll)
EnemiesRouter.delete('/:id', findAll)