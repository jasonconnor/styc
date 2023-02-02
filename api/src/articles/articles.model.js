import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  title: String,
  body: [String],
  size: {
    type: Number,
    default: 1
  },
  type: {
    type: String,
    enum: [
      'ARTICLE',
      'VICTORY',
      'ENEMY',
      'SHOP',
      'CLOSEDSHOP',
      'CLINIC',
      'CLOSEDCLINIC',
      'GAMEOVER',
      'STARTGAME'
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const ArticlesModel = mongoose.model('Article', ArticleSchema)