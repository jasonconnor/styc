import { EnemiesModel } from './enemies.model.js'

export async function getAllEnemies() {
  try {
    const enemies = await EnemiesModel
      .find()
      .populate('attackElement')
      .populate('defenseElementResistance')
      .populate('defenseElementVulnerability')
      .populate('magicElement')
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

export const createNewEnemy = async (newEnemy) => {
  try {
    const enemy = new EnemiesModel({...newEnemy})
    const enemyResult = await enemy.save()

    return {enemy: enemyResult}
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

export const deleteEnemy = async (id) => {
  try {
    const result = await EnemiesModel.deleteOne({_id: id})
    return {result}
  } catch (error) {
    console.error(error)
    return {error}
  }
}