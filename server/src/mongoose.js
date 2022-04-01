import mongoose from 'mongoose'
import { MONGO_URI } from './config.js'

export const connection = async () => {
  const options = {
    user: 'root',
    pass: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  try {
    const res = await mongoose.connect(MONGO_URI, options)
    console.log(`Connected to ${res.connection.name}`)
  } catch (error) {
    console.error(error)
  }
}
