import { getCookie } from "@/components/react/cookie";
import axios from "axios";

const Axios = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
});

// Add a request interceptor to include the Bearer token in all requests
Axios.interceptors.request.use(
   (config) => {
      const token = getCookie("auth");
      // const token = localStorage.getItem("token"); // or use sessionStorage, cookies
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default Axios;
