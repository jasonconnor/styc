import mongoose from 'mongoose'

export async function connect(uri) {
  try {
    await mongoose.connect(uri)
    console.log('Connected to STYC Database.')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}