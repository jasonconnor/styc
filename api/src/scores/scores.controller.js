import { validationResult } from 'express-validator'

import { updateUsersStats } from '../stats/stats.service.js'
import { updateUsersScores } from '../users/users.service.js'
import { createScore, getTop100Scores } from './scores.service.js'

export async function saveScore(request, response) {
  const validationErrors = validationResult(request)

  // handle request validation results
  if (!validationErrors.isEmpty()) return response.status(400).json({
    error: validationErrors.errors[0].msg
  })

  const { user } = request
  const { totalScore, enemiesSlain } = request.body

  const {scoreResult, error: saveError} = await createScore({user, totalScore, enemiesSlain})

  if (saveError) return response.status(500).json({error: 'Failed to save score.'})

  const {error: userScoreUpdateError} = await updateUsersScores(user, scoreResult.id)

  if (userScoreUpdateError) return response.status(500).json({
    error: 'Failed to update user scores.'
  })

  const {error: userStatsUpdateError} = await updateUsersStats(user, {enemiesSlain, totalScore})

  if (userStatsUpdateError) return response.status(500).json({
    error: 'Failed to update user stats.'
  })
  
  return response.status(200).json(scoreResult)
}

export async function highscores(request, response) {
  const {scores, error} = await getTop100Scores()

  if (error) return response.status(500).json({error: 'Error fetching highscores.'})

  return response.status(200).json(scores)
}