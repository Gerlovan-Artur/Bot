import axios, { type AxiosInstance } from 'axios'
import config from './config'

const instance: AxiosInstance = axios.create({
  baseURL: config.crmApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${config.crmToken}`
  }
})

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('Axios request failed:', error.message)
    return await Promise.reject(error)
  }
)

export default instance
