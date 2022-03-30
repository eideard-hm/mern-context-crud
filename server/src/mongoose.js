import mongoose from 'mongoose'
import { MONGO_URI } from './config.js';

export const connection = async () => { 
  try {
    const res = await mongoose.connect(MONGO_URI)
    console.log(`Connected to ${res.connection.name}`);
  } catch (error) {
      console.error(error);
  }
}
