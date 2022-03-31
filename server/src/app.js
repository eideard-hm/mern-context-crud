import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import postRouter from './routes/posts.route.js'
import { connection } from './mongoose.js'

const app = express()
connection()
//routes
app.use('/api/posts', postRouter)

// middelware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.use(morgan('dev'))

export default app
