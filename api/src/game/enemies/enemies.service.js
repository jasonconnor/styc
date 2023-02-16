import { EnemiesModel } from './enemies.model.js'

export async function getAllEnemies() {
  try {
    const enemies = await EnemiesModel.find()
    return [enemies, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function getEnemyByName(name) {
  try {
    const enemy = await EnemiesModel.findOne(name)
    return [enemy, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export async function getRandomEnemy() {
  try {
    const enemy = await EnemiesModel.sample()
    return [enemy, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}