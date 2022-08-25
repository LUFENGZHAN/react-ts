import { Component } from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import Visualization from '../page/Visualization';
import GameCenter from '../page/GameCenter';
import NoPage from '../components/NoPage/NoPage';
import Proislogin from '../components/Proislogin'
export default class index extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Proislogin><Visualization/></Proislogin>}></Route>
          <Route path="/home/*" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/visualization" element={<Visualization/>}></Route>
          <Route path="/game-center" element={<GameCenter/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>

    )
  }
}
