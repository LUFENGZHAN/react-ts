import React from 'react'
import { useNavigate } from 'react-router-dom'
import  style  from './scss/Visualization.module.scss'
import  api  from '../service/request'
api.get('/data').then(res =>{
  console.log(res);
  
})
export default function Visualization() {
    const to = useNavigate()
  return (
    <div className={style.container}>
      <div onClick={() =>to('/home')}>写可视化echarts</div>
    </div>
  )
}
