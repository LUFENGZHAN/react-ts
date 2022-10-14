import React, { Component } from 'react'
import {HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routevive from './router/index'
import {store} from './store/store'
import './App.css'

export default class App extends Component {
  render() {    
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
              <Routevive/>
          </HashRouter>
        </Provider>
      </div>

    )
  }
}
