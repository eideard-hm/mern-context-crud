import express from 'express'
import cors from 'cors'
import router from './routes/posts.route.js'
import { connection } from './mongoose.js'

const app = express()
connection()
//routes
app.use('/posts', router)

// app.use()

app.use(cors())
app.use(express.json())

export default app
