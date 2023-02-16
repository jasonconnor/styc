import { Router } from 'express'

import { findAll, findById } from './users.controller.js'

export const UsersRouter = Router()

// GET Routes
UsersRouter.get('/', findAll)
UsersRouter.get('/:id', findById)