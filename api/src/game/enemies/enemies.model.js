import mongoose from 'mongoose'

const EnemySchema = new mongoose.Schema({
  name: String,
  levelBase: Number,
  experienceBase: Number,
  hpBase: Number,
  attackBase: Number,
  attackElement: [{type: mongoose.Schema.Types.ObjectId, ref: 'Element'}],
  attackAccuracy: Number,
  attackFrequency: Number,
  defenseBase: Number,
  defenseEvade: Number,
  defenseElementResistance: [{type: mongoose.Schema.Types.ObjectId, ref: 'Element'}],
  defenseElementVulnerability: [{type: mongoose.Schema.Types.ObjectId, ref: 'Element'}],
  magicBase: Number,
  magicElement: [{type: mongoose.Schema.Types.ObjectId, ref: 'Element'}],
  magicAccuracy: Number,
  magicCooldown: Number,
  statusChance: Number,
  article: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'},
  createdAt: {
    type: Date,
    default: Date.now,
    select: false
  },
  updatedAt: {
    type: Date,
    select: false
  }
})

export const EnemiesModel = mongoose.model('Enemy', EnemySchema)