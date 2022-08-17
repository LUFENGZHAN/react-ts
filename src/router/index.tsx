import React, { Component } from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
export default class index extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
    )
  }
}
