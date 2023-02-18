import { EnemiesModel } from './enemies.model.js'

export async function getAllEnemies() {
  try {
    const enemies = await EnemiesModel.find()
    return {enemies}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export async function getRandomEnemy() {
  try {
    const enemy = await EnemiesModel.aggregate([{$sample: {size: 1}}])
    return {enemy}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export const createNewEnemy = async (requestBody) => {
  try {
    const newEnemy = new EnemiesModel(requestBody)
    const enemy = await newEnemy.save()

    return {enemy}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export const getEnemyById = async (id) => {
  try {
    const enemy = await EnemiesModel.findById(id)
    return {enemy}
  } catch (error) {
    console.error(error)
    return {error}
  }
}