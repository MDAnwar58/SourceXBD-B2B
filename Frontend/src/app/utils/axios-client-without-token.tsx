import axios from "axios";

const Axios = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
});
export default Axios;
