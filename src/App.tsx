import React, { Component } from 'react'
import { NavLink ,HashRouter } from 'react-router-dom'
import Routevive from './router/index'
import './App.css'
export default class App extends Component {
  links({isActive}:any){
    console.log(isActive);
    return isActive ? 'aa' : ''

  }
  render() {    
    return (
      <div>
        <HashRouter>
          <div>
            <NavLink  to='/' className={this.links}>首页</NavLink>
            <NavLink  to='/Login' className={this.links}>目录</NavLink>
            <NavLink  to='/List' className={this.links}>列表</NavLink>
          </div>
          <Routevive/>
        </HashRouter>
      </div>
    )
  }
}
