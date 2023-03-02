import { Router } from "express";
import { create, findAll, findOne, findOneId } from "./elements.controller.js";

export const ElementsRouter = Router()

ElementsRouter.get('/', findAll)
ElementsRouter.get('/:name', findOne)
ElementsRouter.get('/:id', findOneId)
ElementsRouter.post('/', create)