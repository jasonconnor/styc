import mongoose from 'mongoose'

const StatsSchema = new mongoose.Schema({
  cumulativeScore: Number,
  cumulativeEnemiesSlain: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

StatsSchema.pre('save', function(next) {
  this.cumulativeScore = 0
  this.totalEnemiesSlain = 0
  return next ()
})

export const StatsModel = mongoose.model('Stats', StatsSchema)