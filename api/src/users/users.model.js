import mongoose from 'mongoose'

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
  stats: {type: mongoose.Schema.Types.ObjectId, ref: 'Stats'},
  scores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Score'}]
})

export const UsersModel = mongoose.model('User', UserSchema)