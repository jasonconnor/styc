import { UsersModel } from '../users/users.model.js'

export async function getAccountStatsAndScores(id) {
  try {
    const user = await UsersModel.findById(id).populate('scores').populate('stats')
    return [user, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}