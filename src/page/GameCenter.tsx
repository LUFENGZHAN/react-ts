import React, { useRef, useEffect, useState } from 'react'
import style from './GameCenter.module.scss'
import { NavLink,useNavigate } from 'react-router-dom'
import { links, route } from '../App'
export default function GameCenter() {
  const to = useNavigate()
  const the:any = (e:number) =>{ 
    to('/home/home1',{state:e===1? '1':'2'})
  }
  return (
    <div>
      {route.map((val: any, index: any) => {
        return (
          <NavLink key={index} to={val.to} className={links}>{val.name}</NavLink>

        )
      })}
      <div onClick={the}>点击</div>
    </div>
  )
}
