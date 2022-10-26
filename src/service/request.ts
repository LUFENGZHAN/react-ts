import { ipList } from "./ipconfig";
import { message } from 'antd';
import axios from "axios";
const codeis = [0,200]
const common = axios.create({ baseURL: ipList.PRESENT_IP, timeout: ipList.TIME });
common.interceptors.request.use(
    (config) => { 
        let token = localStorage.getItem("token")
        if (token && config.headers) {
            config.headers['token'] = token
        }
        return config;
    },
)
common.interceptors.response.use(
    (config) =>{         
        if (codeis.includes(config.data.code)) {
            return config.data      
        } else {
            return message.error('接口错误') 
        }
    }
)
declare global {
    interface Window {
        common: typeof common
    }
}
export default window.common=common; 

