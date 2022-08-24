import React, { useRef, useEffect, useState } from 'react'
import style from './GameCenter.module.scss'
import {useNavigate } from 'react-router-dom'
export default function GameCenter() {
  const to = useNavigate()
  const the:any = (e:number) =>{ 
    to('/home')
  }
  return (
    <div>
      <div onClick={the}>点击</div>
    </div>
  )
}
