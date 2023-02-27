import { ElementsModel } from './elements.model.js'

export const getAllElements = async () => {
  try {
    const elements = await ElementsModel.find()
    return {elements}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function findByName(name) {
  try {
    const element = await ElementsModel.findOne(name)
    return {element}
  } catch (error) {
    console.error(error)
    return {error}
  }
}