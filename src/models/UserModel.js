import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    select: false
  },
  role: {
    type: String,
    enum: ['user'],
    default: 'user'
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('User', UserSchema);