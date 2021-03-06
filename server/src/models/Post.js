import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 70,
    required: true,
    trim: true
  },
  description: {
    type: String,
    maxlength: 70,
    required: true,
    trim: true
  },
  image: {
    url: String,
    public_id: String
  }
})

export default mongoose.model('Posts', postSchema)
