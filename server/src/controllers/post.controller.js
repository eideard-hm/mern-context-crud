import Post from '../models/Post.js'

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).send(posts)
  } catch (error) {
    res.status(400).send('Not found posts')
  }
}

export const getPostById = (req, res) => {
  res.send('Getting post by id')
}

export const create = (req, res) => {
  console.log(req.body);
  return res.json({'body': req.body})
  try {
    const { title, description } = req.body
    const post = new Post({ title, description })
    console.log(post)
  } catch (error) {
    console.error(error)
  }
}

export const update = (req, res) => {
  res.send('Update post')
}

export const deletePostById = (req, res) => {
  res.send('Delete post by id')
}
