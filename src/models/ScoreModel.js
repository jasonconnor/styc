import mongoose, { Schema } from 'mongoose'

const ScoreSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now()
  },
  score: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 0,
  }
})