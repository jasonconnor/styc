import { AbilitiesModel } from './abilities.model.js'

export async function findByName(name) {
  try {
    const element = await AbilitiesModel.findOne(name)
    return [element, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}