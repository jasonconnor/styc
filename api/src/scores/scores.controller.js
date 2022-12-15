import { updateUsersScores } from '../users/users.service.js'
import { createScore, getTop100Scores } from './scores.service.js'

export async function saveScore(request, response) {
  const { user } = request
  const { totalScore, enemiesSlain } = request.body

  const [score, saveError] = await createScore({user, totalScore, enemiesSlain})

  if (saveError) return response.status(500).json({error: 'Failed to save score.'})

  const [scoreUpdate, scoreUpdateError] = await updateUsersScores(user, score.id)

  if (scoreUpdateError) return response.status(500).json({
    error: 'Failed to update user scores.'
  })

  

  return response.status(200).json(score)
}

export async function highscores(request, response) {
  const [scores, error] = await getTop100Scores()

  if (error) return response.status(500).json({error: 'Error fetching highscores.'})

  return response.status(200).json(scores)
}