import mongoose from 'mongoose'

const StatsSchema = new mongoose.Schema({
  totalKills: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

StatsSchema.pre('save', function(next) {
  console.log(this)
  this.totalKills = 0
  return next ()
})

export const StatsModel = mongoose.model('Stats', StatsSchema)