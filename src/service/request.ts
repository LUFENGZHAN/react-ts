import React from 'react'
import {ipList} from './ipconfig'
import axios from 'axios'
export const config = axios.create({baseURL:ipList.PRESENT_IP})
axios.defaults.timeout= 2500


