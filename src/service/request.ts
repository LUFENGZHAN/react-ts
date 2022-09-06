import { ipList } from "./ipconfig";

import axios from "axios";
const api = axios.create({ baseURL: ipList.PRESENT_IP, timeout: ipList.TIME });
api.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token")

        if (token && config.headers) {
            config.headers['token'] = token
        }
        return config;
    },
)
export default api;
