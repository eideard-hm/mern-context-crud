import { createContext } from 'react'
import { useAxios } from '../hooks/useAxios'
import { createPostAsync, deletePostAsync, getPostByIdAsync, updatePostAsync } from '../services/posts'
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
    const { data, status } = await createPostAsync(posts)
    if (status === 201) {
      setPosts(previusPost => [...previusPost, data])
    }
    return [status, data]
  }

  const updatePost = async post => {
    const { _id } = post;
    const { data, status } = await updatePostAsync(_id, post);
    if (status === 200) {
      setPosts(posts.map(post => post._id === _id ? data : post))
    }
    return [status, data]
  }

  const deletePost = async id => {
    const { data, status } = await deletePostAsync(id);
    if (status === 204) {
      setPosts(previusPost => previusPost.filter(post => post._id !== id))
    }
    return [status, data]
  }

  const data = { getPostById, getPosts, createPost, updatePost, deletePost }

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>
}

export { PostContext, PostProvider }
