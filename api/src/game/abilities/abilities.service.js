import { AbilitiesModel } from './abilities.model.js'

export async function findByName(name) {
  try {
    const ability = await AbilitiesModel.findOne(name)
    return {ability}
  } catch (error) {
    console.error(error)
    return {error}
  }
}