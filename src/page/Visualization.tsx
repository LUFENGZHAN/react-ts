import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Visualization() {
    const to = useNavigate()
  return (
    <div onClick={() =>to('/home')}>写可视化echarts</div>
  )
}
