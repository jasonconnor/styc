import { StatsModel } from './stats.model.js'

export async function createStatsForUser(id) {
  try {
    const stats = new StatsModel({
      user: id,
      totalKills: 0
    })
    
    const newStats = await stats.save()
    
    return [newStats, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}