import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('User', UserSchema);