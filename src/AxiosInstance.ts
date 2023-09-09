import Config from 'react-native-config';
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: Config.BACKEND_URL,
  timeout: 5000,
}); // 5 seconds

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     // If the token exists in localStorage, add it to the request headers
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     // Handle request error here
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
