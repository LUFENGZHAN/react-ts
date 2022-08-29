import React from 'react'
import  style  from './scss/nopage.module.scss';
import { useNavigate } from 'react-router-dom'

export default function NoPage() {
  const to = useNavigate()
  function tab(){
     to('/home')
  }
  return (
    <div className={style.container}>
      <p><span>404</span>页面错误</p>
      <div className={style.tab} onClick={tab}>
        点击返回首页
      </div>
    </div>
  )
}
