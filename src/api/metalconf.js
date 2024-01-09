import axios from "axios";
import { useLoged } from "../store/logedStore";

const metalconf = axios.create(
    {
        baseURL:"http://127.0.0.1:8000/api/",
        withCredentials: true
    }
)

metalconf.interceptors.request.use(config =>{
    const token = useLoged.getState().token
    config.headers = {
        Authorization: `Bearer ${token}`
    }
    return config
})

export default metalconf