import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../components/about'
import Indexs from '../components/index'
export default class index extends Component {
  render() {
    return (
      <Routes>
        <Route path="/indexs" element={<Indexs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    )
  }
}
