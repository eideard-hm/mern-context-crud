import Post from '../models/Post.js'

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).send(posts)
  } catch (error) {
    res.status(400).send(`Not found posts - ${error}`)
  }
}

export const getPostById = (req, res) => {
  res.send('Getting post by id')
}

export const create = async (req, res) => {
  try {
    const { title, description } = req.body
    const post = new Post({ title, description })
    await post.save()
    res.status(201).send(post)
  } catch (error) {
    res.status(500).send(`Could not insert Post - ${error}`)
  }
}

export const update = (req, res) => {
  res.send('Update post')
}

export const deletePostById = (req, res) => {
  res.send('Delete post by id')
}
