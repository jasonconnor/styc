import mongoose from 'mongoose'

import { UsersModel } from '../users/users.model.js'

const ScoreSchema = mongoose.Schema({
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