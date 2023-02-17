import { UsersModel } from './users.model.js'

export async function getAllUsers() {
  try {
    const users = await UsersModel.find()
    return {users}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function getUserById(id) {
  try {
    const user = await UsersModel.findById(id)
    return {user}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function getAccountData(id) {
  try {
    const user = await UsersModel
      .findById(id)
      .populate('stats')
      .populate('scores')
    return {user}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function updateUsersScores(userId, scoreId) {
  try {
    const user = await UsersModel.findById(userId)
    const userScoreUpdateResult = await user.update({$push: {'scores': scoreId}})
    return {userScoreUpdateResult}
  } catch (error) {
    console.error(error)
    return {error}
  }
}