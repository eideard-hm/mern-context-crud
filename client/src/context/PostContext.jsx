import { createContext } from 'react'
import { useAxios } from '../hooks/useAxios'
import { createPostAsync, deletePostAsync, getPostByIdAsync } from '../services/posts'
import { POST_URL } from '../utils/config'

// crear el context
const PostContext = createContext()

// envolver los hijos para compartir la data - Provider
const PostProvider = ({ children }) => {

  const { posts, setPosts } = useAxios([], POST_URL)

  const getPosts = () => {
    return posts
  }

  const getPostById = async id => {
    const res = await getPostByIdAsync(id);
    return [res.data, res.status]
  }

  const createPost = async posts => {
    const res = await createPostAsync(posts)
    if (res.status === 201) {
      setPosts(previusPost => [...previusPost, res.data])
    }
    return [res.status, res.data]
  }

  const deletePost = async id => {
    const res = await deletePostAsync(id);
    if (res.status === 204) {
      setPosts(previusPost => previusPost.filter(post => post._id !== id))
    }
    return [res.status, res.data]
  }

  const data = { getPostById, getPosts, createPost, deletePost }

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>
}

export { PostContext, PostProvider }
