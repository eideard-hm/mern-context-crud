import Post from '../models/Post.js'

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).send(posts)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getPostById = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id)

    if (!post) res.status(404).send(`Post with id: ${id} not found`)

    res.status(200).send(post)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const create = async (req, res) => {
  try {
    const { title, description } = req.body
    const newPost = new Post({ title, description })
    await newPost.save()
    res.status(201).send(newPost)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params
    const updatePost = await Post.findByIdAndUpdate(id, req.body, { new: true })

    if (!updatePost) res.status(404).send(`Post with id: ${id} not found`)

    res.status(200).send(updatePost)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params
    const deletePost = await Post.findByIdAndDelete(id)

    if (!deletePost)
      return res.status(404).send(`Post with id: ${id} not found`)

    res.status(200).send(deletePost)
  } catch (error) {
    res.status(500).send(error)
  }
}
