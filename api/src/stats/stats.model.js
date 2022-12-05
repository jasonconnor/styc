import mongoose from 'mongoose'

import { UsersModel } from '../users/users.model.js'

const StatsSchema = new mongoose.Schema({
  totalKills: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export const StatsModel = mongoose.model('Stats', StatsSchema)