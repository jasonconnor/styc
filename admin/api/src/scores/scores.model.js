import mongoose from 'mongoose'

const ScoreSchema = new mongoose.Schema({
  enemiesSlain: Number,
  totalScore: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const ScoresModel = mongoose.model('Score', ScoreSchema)