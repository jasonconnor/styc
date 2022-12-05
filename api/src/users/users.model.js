import mongoose from 'mongoose'

import { StatsModel } from '../stats/stats.model.js'
import { ScoresModel } from '../scores/score.model.js'

const UserSchema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  scores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Score'}],
  stats: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stats'}]
})

export const UsersModel = mongoose.model('User', UserSchema)