import axios from 'axios'
import { POST_URL } from '../utils/config'

export const createPostAsync = async posts => {
  return axios.post(POST_URL, posts)
}
