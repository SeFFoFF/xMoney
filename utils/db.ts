import mongoose from 'mongoose'

const connectionToMongo = async (): Promise<unknown> => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    // console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
  }
}

export default connectionToMongo
