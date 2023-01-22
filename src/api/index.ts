import axios from 'axios';
import axiosConfig from './config';

const $api = axios.create(axiosConfig);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error?.config;

    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;

      await axios.get('/refresh', axiosConfig);

      return $api.request(originalRequest);
    }

    throw error;
  },
);

export default $api;
