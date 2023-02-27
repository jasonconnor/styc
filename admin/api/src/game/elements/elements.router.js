import { Router } from "express";
import { findAll } from "./elements.controller.js";

export const ElementsRouter = Router()

ElementsRouter.get('/', findAll)
// ElementsRouter.post('/', () => {})