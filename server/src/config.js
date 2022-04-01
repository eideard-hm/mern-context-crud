import { config } from 'dotenv'
// environment variables
config()

export const PORT = process.env.PORT || '4200'
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tests'
export const CLOUD_NAME = process.env.CLOUD_NAME
export const API_KEY = process.env.API_KEY
export const API_SECRET = process.env.API_SECRET
