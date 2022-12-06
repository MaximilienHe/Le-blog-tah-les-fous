import axios from 'axios';

const axiosInstance = axios.create({ withCredentials: true, credentials: 'include' });

export default axiosInstance;