import {ipList} from "./ipconfig";
import axios from "axios";
const api = axios.create({baseURL: ipList.PRESENT_IP, timeout: ipList.TIME});
export default api;
