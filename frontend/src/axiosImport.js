import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    origin: false,
});

export default axiosInstance;