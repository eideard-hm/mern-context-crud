import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxios = (
  initalState = [],
  url
) => {
  const [posts, setPosts] = useState(initalState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        setPosts(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [url])

  return { posts, setPosts }
}
