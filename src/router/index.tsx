import React, { Component } from 'react'
import { Routes, Route,} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import GameCenter from '../page/GameCenter';
export default class index extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/game-center" element={<GameCenter/>}></Route>

        </Routes>
    )
  }
}
