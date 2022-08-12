import React, { Component } from 'react'
import { NavLink ,HashRouter } from 'react-router-dom'
import Router from './router/index'
import './ACC.css'
export default class App extends Component {
  links({isActive}:any){
    console.log(isActive);
    return isActive ? 'aa' : 'base'

  }
  render() {    
    return (
      <div>
        
        <HashRouter>
          <div>
            <NavLink  to='/indexs' className={this.links}>首页</NavLink>
            <NavLink  to='/about' className={this.links}>目录</NavLink>
          </div>
          <Router/>
        </HashRouter>
      </div>
    )
  }
}
