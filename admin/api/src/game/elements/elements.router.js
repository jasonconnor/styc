import { Router } from "express";
import { create, findAll, findOneId } from "./elements.controller.js";

export const ElementsRouter = Router()

ElementsRouter.get('/', findAll)
ElementsRouter.get('/:id', findOneId)
ElementsRouter.post('/', create)