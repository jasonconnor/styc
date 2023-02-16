import { UsersModel } from './users.model.js'

export async function getAllUsers() {
  try {
    const users = await UsersModel.find()
    return [users, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function getUserById(id) {
  try {
    const user = await UsersModel.findById(id)
    return [user, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function getAccountData(id) {
  try {
    const user = await UsersModel
      .findById(id)
      .populate('stats')
      .populate('scores')
    return [user, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function updateUsersScores(userId, scoreId) {
  try {
    const user = await UsersModel.findById(userId)
    const update = await user.update({$push: {'scores': scoreId}})
    return [update, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}