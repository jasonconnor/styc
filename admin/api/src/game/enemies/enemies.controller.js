import { createNewEnemy, getAllEnemies, getEnemyById, getRandomEnemy } from './enemies.service.js'


export async function findAll(request, response) {
  const [enemies, error] = await getAllEnemies()

  if (error) return response.status(500).json({error: 'Error fetching enemies.'})

  return response.status(200).json(enemies)
}

export async function random(request, response) {
  const [enemy, error] = await getRandomEnemy()

  if (error) return response.status(500).json({error: 'Error fetching random enemy.'})

  return response.status(200).json(enemy)
}

export const create = async (request, response) => {
  const {enemy, error} = await createNewEnemy(request.body)

  if (error) return response.status(500).json({
    error: 'An error occurred while creating new enemy.'
  })

  return response.status(200).json(enemy)
}

export const findById = async (request, response) => {
  const { id } = request.params
  
  const {enemy, error} = await getEnemyById(id)

  if (error) return response.status(500).json({
    error: `An error occurred while fetching the enemy with the id '${id}'.`
  })

  if (!enemy) return response.status(400).json({
    error: `No enemy found with the id '${id}'.`
  })

  return response.status(200).json(enemy)
}

