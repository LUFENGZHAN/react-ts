import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import  style  from './scss/Visualization.module.scss'
import  api  from '../service/request'

export default function Visualization() {
    const to = useNavigate()
  useEffect(() =>{
    ( function apiList (){      
       api.get('/data').then(res =>{
        console.log(res);
        
       })
    }())

  })
  return (
    <div className={style.container}>
      <div onClick={() =>to('/home')}>echarts</div>
    </div>
  )
}
