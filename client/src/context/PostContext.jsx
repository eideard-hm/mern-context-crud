import { createContext } from 'react'
import { useAxios } from '../hooks/useAxios'

// crear el context
const PostContext = createContext()

const DEFAUL_URL = 'http://localhost:4000/api/posts'

// envolver los hijos para compartir la data - Provider
const PostProvider = ({ children }) => {
  const getPosts = (url = DEFAUL_URL) => {
    return useAxios([], url)
  }

  const data = { getPosts }

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>
}

export { PostContext, PostProvider }
