import { getAllEnemies, getRandomEnemy } from './enemies.service.js'


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