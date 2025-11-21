import mongoose from 'mongoose'

async function connectDB(uri) {
  if (!uri) {
    console.warn('MONGO_URI not provided — skipping DB connect')
    return
  }
  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.warn('MongoDB connection error:', err.message)
  }
}

export { connectDB, mongoose }
