import { Component } from 'react'
import { Routes, Route,Navigate} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import Visualization from '../page/Visualization';
import GameCenter from '../page/GameCenter';
import NoPage from '../components/NoPage/NoPage';
export default class index extends Component {
  componentDidMount() {
    // 在window对象中添加监听事件
    window.addEventListener('popstate', event=>{
    console.log("location: " + window.location + ", state: ");

    })
 }
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