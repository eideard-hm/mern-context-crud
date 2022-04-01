import express from 'express'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import morgan from 'morgan'
import postRouter from './routes/posts.route.js'
import { connection } from './mongoose.js'

// create an app
const app = express()

//connection with database
connection()

// middelware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
  })
)

app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/posts', postRouter)

export default app
