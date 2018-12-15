import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID f363802431dc7a5495fdc1a5ef028884404e5ee1d32ee52e4d258cb3b2ce188d'
  }
})
