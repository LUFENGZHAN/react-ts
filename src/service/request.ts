import React from 'react'
import './ipconfig'
import axios from 'axios'
export const config = axios.create({baseURL:'http://localhost:3000'})
axios.defaults.timeout= 2500


