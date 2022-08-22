import React, { Component } from 'react'
import { Routes, Route,Navigate} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import GameCenter from '../page/GameCenter';
export default class index extends Component {
  render() {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/game-center" element={<GameCenter/>}></Route>
          <Route path="*" element={<Navigate to="/login" />}></Route>
        </Routes>

    )
  }
}
