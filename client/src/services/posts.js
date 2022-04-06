import axios from 'axios'
import { POST_URL } from '../utils/config'

export const createPostAsync = async post => {
  const formData = new FormData()

  for (let key in post) {
    formData.append(key, post[key])
  }

  return await axios.post(POST_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getPostByIdAsync = async id => await axios.get(`${POST_URL}/${id}`)

export const updatePostAsync = async (id, post) =>
  await axios.put(`${POST_URL}/${id}`, post)

export const deletePostAsync = async id =>
  await axios.delete(`${POST_URL}/${id}`)
