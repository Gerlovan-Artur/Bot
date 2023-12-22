import axios, { AxiosInstance } from 'axios';
import config from '../config/config';

const instance: AxiosInstance = axios.create({
  baseURL: config.crmApiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${config.crmToken}`,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios request failed:', error.message);
    return Promise.reject(error);
  }
);

export default instance;