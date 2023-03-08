import { generateElementIdsFromElementsAsync } from '../elements/elements.service.js'
import { createNewEnemy, deleteEnemy, getAllEnemies, getRandomEnemy } from './enemies.service.js'

export async function findAll(_, response) {
  const { enemies, error } = await getAllEnemies()

  if (error) return response.status(500).json({ error: 'Error fetching enemies.' })

  return response.status(200).json(enemies)
}

export async function random(_, response) {
  const { enemy, error } = await getRandomEnemy()

  if (error) return response.status(500).json({ error: 'Error fetching random enemy.' })

  return response.status(200).json(enemy)
}

export const create = async (request, response) => {
  const { enemy } = request.body;

  if (enemy.attackElement?.length) {
    const { elements, error } =
      await generateElementIdsFromElementsAsync(enemy.attackElement)

    if (error) return response.status(500).json({ error: 'Error while creating enemy.' })

    enemy.attackElement = elements
  }

  if (enemy.defenseElementResistance?.length) {
    const { elements, error } =
      await generateElementIdsFromElementsAsync(enemy.defenseElementResistance)

    if (error) return response.status(500).json({ error: 'Error while creating enemy.' })

    enemy.defenseElementResistance = elements
  }

  if (enemy.defenseElementVulnerability?.length) {
    const { elements, error } =
      await generateElementIdsFromElementsAsync(enemy.defenseElementVulnerability)

    if (error) return response.status(500).json({ error: 'Error while creating enemy.' })

    enemy.defenseElementVulnerability = elements
  }

  if (enemy.magicElement?.length) {
    const { elements, error } =
      await generateElementIdsFromElementsAsync(enemy.magicElement)

    if (error) return response.status(500).json({ error: 'Error while creating enemy.' })

    enemy.magicElement = elements
  }

  const { enemy: enemyResult, error } = await createNewEnemy(enemy)

  if (error) return response.status(500).json({ error: 'Error creating enemy.' })

  console.log('New enemy created successfully!', enemyResult)

  const { enemies, error: fetchAllError } = await getAllEnemies()

  if (fetchAllError) return response.status(500).json({ error: 'Error fetching enemies after enemy successfully created.' })

  return response.status(201).json(enemies)
}

export const deleteOne = async (request, response) => {
  const { id: enemyId } = request.params

  const { result, error } = await deleteEnemy(enemyId)

  if (error) return response.status(500).json({ error: 'Error deleting enemy.' })
  
  return response.status(200).json(result)
}
