import mongoose from 'mongoose';

const ScoreSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
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
  }
});

export default mongoose.model('Score', ScoreSchema);