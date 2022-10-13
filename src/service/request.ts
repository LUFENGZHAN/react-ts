import { ipList } from "./ipconfig";
import { message } from 'antd';

import axios from "axios";
const codeis = [0,200]
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
api.interceptors.response.use(
    (config) =>{    
        if (codeis.includes(config.status)) {
            return config.data      
        } else {
            return message.error('接口错误') 
        }
    }
)
export default api;
