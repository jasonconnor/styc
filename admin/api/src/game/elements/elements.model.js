import mongoose from 'mongoose'

const ElementSchema = new mongoose.Schema({
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

export const ElementsModel = mongoose.model('Element', ElementSchema)