import axios from 'axios';
import handleError from 'utilities/handleError';

const axiosInstance = axios.create({
  baseURL: '/api',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => handleError(error),
);

export default axiosInstance;
