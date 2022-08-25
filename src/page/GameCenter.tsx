import React, { useRef, useEffect, useState } from 'react'
import style from './GameCenter.module.scss'
import {useNavigate } from 'react-router-dom'
export default function GameCenter() {
  const [data] = useState(0)
  const dva: any= useRef()
  useEffect(() =>{
  },)
  const to = useNavigate()
  const the:any = (e:number) =>{ 
    to('/home')
  }
  return (
    <div className={style.container}>
      <div ref={dva} onClick={the}>点击{data}</div>
    </div>
  )
}
