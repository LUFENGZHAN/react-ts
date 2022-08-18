import React, { useRef, useEffect, useState } from 'react'
import style from './GameCenter.module.scss'
import { NavLink, HashRouter } from 'react-router-dom'
import { links, route } from '../App'
export default function GameCenter() {
  return (
    <div>
      {route.map((val: any, index: any) => {
        return (
          <NavLink key={index} to={val.to} className={links}>{val.name}</NavLink>

        )
      })}
    </div>
  )
}
