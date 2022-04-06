import axios from 'axios'
import { POST_URL } from '../utils/config'

export const createPostAsync = async posts => {
  return await axios.post(POST_URL, posts)
}

export const getPostByIdAsync = async id => {
  return await axios.get(`${POST_URL}/${id}`)
}

export const updatePostAsync = async (id, post) => {
  return await axios.put(`${POST_URL}/${id}`, post)
}

export const deletePostAsync = async id => {
  return await axios.delete(`${POST_URL}/${id}`)
}
