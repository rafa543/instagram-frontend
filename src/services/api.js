import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-instagram-v.herokuapp.com'
})

export default api