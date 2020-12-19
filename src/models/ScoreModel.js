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
    default: 0
  },
  level: {
    type: Number,
    default: 0
  },
  enemiesSlain: {
    type: Number,
    default: 0
  },
  attacksDealt: {
    type: Number,
    default: 0
  },
  criticalsDealt: {
    type: Number,
    default: 0
  },
  damageDealt: {
    type: Number,
    default: 0
  },
  mostDamageDealt: {
    type: Number,
    default: 0
  },
  attacksTaken: {
    type: Number,
    default: 0
  },
  damageTaken: {
    type: Number,
    default: 0
  },
  mostDamageTaken: {
    type: Number,
    default: 0
  },
  attacksDodged: {
    type: Number,
    default: 0
  },
  potionsUsed: {
    type: Number,
    default: 0
  },
  pointsSpent: {
    type: Number,
    default: 0
  },
  healthRestored: {
    type: Number,
    default: 0
  },
  timesRan: {
    type: Number,
    default: 0
  }
})