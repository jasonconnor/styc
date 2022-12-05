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