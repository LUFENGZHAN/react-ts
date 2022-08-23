import React, { Component } from 'react'
import { Routes, Route,Navigate} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import GameCenter from '../page/GameCenter';
import NoPage from '../components/NoPage/NoPage';
import Proislogin from '../components/Proislogin'
export default class index extends Component {
  render() {
    return (
        <Routes>
          <Route path="/home/*" element={<Proislogin><Home/></Proislogin>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/game-center" element={<GameCenter/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>

    )
  }
}
