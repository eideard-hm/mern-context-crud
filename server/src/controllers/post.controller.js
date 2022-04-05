import fs from 'fs-extra'

import Post from '../models/Post.js'
import {
  deleteFileCloudinary,
  uploadFilesCloudinary
} from '../utils/cloudinary.js'

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).send(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPostById = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id)

    if (!post) res.status(404).send(`Post with id: ${id} not found`)

    res.status(200).send(post)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const create = async (req, res) => {
  try {
    const { title, description } = req.body
    let image = null

    if (req.files?.image) {
      const { tempFilePath } = req.files.image
      const { secure_url, public_id } = await uploadFilesCloudinary(
        tempFilePath
      )
      image = {
        url: secure_url,
        public_id
      }
      await fs.remove(tempFilePath)
    }

    const newPost = new Post({ title, description, image })
    await newPost.save()
    res.status(201).send(newPost)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params
    const updatePost = await Post.findByIdAndUpdate(id, req.body, { new: true })

    if (!updatePost) res.status(404).send(`Post with id: ${id} not found`)

    res.status(200).send(updatePost)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params
    const deletePost = await Post.findByIdAndDelete(id)

    if (!deletePost)
      return res.status(404).send(`Post with id: ${id} not found`)

    if (deletePost.image.public_id)
      await deleteFileCloudinary(deletePost.image.public_id)

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
