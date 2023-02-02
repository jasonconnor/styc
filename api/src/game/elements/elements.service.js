import { ElementsModel } from './elements.model.js'

export async function findByName(name) {
  try {
    const element = await ElementsModel.findOne(name)
    return [element, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}