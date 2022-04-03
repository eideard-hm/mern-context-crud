import { createContext } from 'react'
import { useAxios } from '../hooks/useAxios'
import { POST_URL } from '../utils/config'

// crear el context
const PostContext = createContext()

// envolver los hijos para compartir la data - Provider
const PostProvider = ({ children }) => {
  const getPosts = (url = POST_URL) => {
    return useAxios([], url)
  }

  const data = { getPosts }

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>
}

export { PostContext, PostProvider }
