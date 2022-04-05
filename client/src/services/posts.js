import axios from 'axios'
import { POST_URL } from '../utils/config'

export const createPostAsync = async posts => {
  return axios.post(POST_URL, posts)
}

export const getPostByIdAsync = async id => {
  return axios.get(`${POST_URL}/${id}`)
}

export const deletePostAsync = async id => {
  return axios.delete(`${POST_URL}/${id}`)
}
