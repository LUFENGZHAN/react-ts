import React, { Component } from 'react'
import Routevive from './router/index'
import './App.css'
export  function links({isActive}:any){
  return isActive ? 'aa' : ''

}
export const route= [ {to: '/',name: '首页',},
{to: '/login',name: '登录',},
{to: '/game-center',name: '游戏中心',},]
export default class App extends Component {

  render() {    
    return (
      <div>
          <Routevive/>
      </div>
    )
  }
}
