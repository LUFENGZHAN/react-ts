import React, { Component } from 'react'
import {HashRouter } from 'react-router-dom'
import Routevive from './router/index'
import './App.css'
export default class App extends Component {

  render() {    
    return (
      <div>
        <HashRouter>
            <Routevive/>
        </HashRouter>
      </div>

    )
  }
}
