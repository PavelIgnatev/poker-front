const API_URL = process.env.API_URL ?? 'http://localhost:5000/api';

const axiosConfig = {
  withCredentials: true,
  baseURL: API_URL,
};

export default axiosConfig;
