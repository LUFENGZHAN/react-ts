import { Component } from 'react'
import { Routes, Route,Navigate} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import Visualization from '../page/Visualization';
import GameCenter from '../page/GameCenter';
import NoPage from '../components/NoPage/NoPage';
let time = new Date().getTime();
console.log(time);
let timer=setTimeout(function() {
  window.localStorage.removeItem('token');
  window.location.reload();
}, 360000);
if (!window.localStorage.getItem('token')){
  clearTimeout(timer)
}
export default class index extends Component {
  render() {
    return window.localStorage.getItem('token') ? (
        <Routes>
          <Route path="/" element={<Visualization/>}></Route>
          <Route path="/home/*" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/visualization" element={<Visualization/>}></Route>
          <Route path="/game-center/*" element={<GameCenter/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>

    ):(
      <Routes>
        <Route path="*" element={<Navigate to="/login" />}></Route>
         <Route path="/login" element={<Login/>}></Route>
      </Routes>

      
    )

  }
}