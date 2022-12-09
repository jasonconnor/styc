import { UsersModel } from '../users/users.model.js'

export async function getAccountData(id) {
  try {
    const user = await UsersModel
      .findById(id)
      .populate('stats')
      .populate('scores')
    console.log(user.stats)
    return [user, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}