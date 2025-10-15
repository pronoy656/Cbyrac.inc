// src/utils/axiosInstance.js
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "http://10.10.7.102:8000/api/v1",
});

const axiosInstance = axiosApi.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const token = JSON.parse(userInfo)?.token;
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
