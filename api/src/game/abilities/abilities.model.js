import mongoose from 'mongoose'

const AbilitySchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
    select: false
  },
  updatedAt: {
    type: Date,
    select: false
  },
})

export const AbilitiesModel = mongoose.model('Ability', AbilitySchema)