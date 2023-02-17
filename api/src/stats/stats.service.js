import { StatsModel } from './stats.model.js'

export async function updateUsersStats(userId, data) {
  try {
    const stats = await StatsModel.findOne({user: userId})
    const userStatsUpdateResult = await stats.update({$inc: {
      cumulativeEnemiesSlain: data.enemiesSlain,
      cumulativeScore: data.totalScore
    }})

    return {userStatsUpdateResult}
  } catch (error) {
    console.error(error)
    return {error}
  }
}