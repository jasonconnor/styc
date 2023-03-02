import { findById } from '../elements/elements.service.js'
import { createNewEnemy, getAllEnemies, getRandomEnemy } from './enemies.service.js'

export async function findAll(request, response) {
  const {enemies, error} = await getAllEnemies()

  if (error) return response.status(500).json({error: 'Error fetching enemies.'})

  return response.status(200).json(enemies)
}

export async function random(request, response) {
  const {enemy, error} = await getRandomEnemy()

  if (error) return response.status(500).json({error: 'Error fetching random enemy.'})

  return response.status(200).json(enemy)
}

export const create = async (request, response) => {
  const {enemy} = request.body;

  if (enemy.attackElement?.length) {
    const requestElements = []

    for (let element of enemy.attackElement) {
      const {element: elementResult, error} = findById(element)

      if (error) {
        return response.status(500).json({error: 'Error validating elements.'})
      }

      if (elementResult) {}
    }


  }
  
  if (enemy.defenseElementResistance?.length) {

  }
  
  if (enemy.defenseElementVulnerability?.length) {

  }
  
  if (enemy.magicElement?.length) {

  }
  

  const {result: enemyResult, error} = await createNewEnemy(enemy)

  if (error) return response.status(500).json({error: 'Error creating enemy.'})

  return response.status(201).json(enemyResult)
}