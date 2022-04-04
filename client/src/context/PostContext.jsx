import { createContext } from 'react'
import { useAxios } from '../hooks/useAxios'
import { createPostAsync } from '../services/posts'
import { POST_URL } from '../utils/config'

// crear el context
const PostContext = createContext()

// envolver los hijos para compartir la data - Provider
const PostProvider = ({ children }) => {

  const { posts, setPosts } = useAxios([], POST_URL)

  const getPosts = () => {
    return posts
  }

  const createPost = async posts => {
    const res = await createPostAsync(posts)

    if (res.status === 201) {
      setPosts(previusPost => [...previusPost, res.data])
    }
    return [res.status, res.data]
  }

  const data = { getPosts, createPost }

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>
}

export { PostContext, PostProvider }
