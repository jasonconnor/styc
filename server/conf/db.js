import mongoose from 'mongoose';

const connect = async (uri) => {
  // TODO: clean up connection code
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