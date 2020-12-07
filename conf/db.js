import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/styc';

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () => console.log('Connected to MongoDB.'));
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

export default connect;