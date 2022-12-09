import { UsersModel } from '../users/users.model.js'
import { StatsModel } from '../stats/stats.model.js'
import { ScoresModel } from '../scores/score.model.js'

export async function getAccountStatsAndScores(id) {
  try {
    const user = await UsersModel
      .findById(id)
      .populate({path: 'stats', model: StatsModel})
      .populate({path: 'scores', model: ScoresModel})
    console.log(user.stats)
    return [user, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}