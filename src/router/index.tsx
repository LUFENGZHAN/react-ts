import { Component } from 'react'
import { Routes, Route,Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Visualization from '../pages/Visualization';
import GameCenter from '../pages/GameCenter';
import NoPage from '../components/NoPage/NoPage';
import HomePage from '../pages/GameCenter/HomePage';
import ListOne from '../pages/GameCenter/ListOne';
import ListTwe from '../pages/GameCenter/ListTwe';
export default class index extends Component {
  render() {
    return window.localStorage.getItem('token') ? (
        <Routes>
          <Route path="/" element={<Visualization/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/visualization" element={<Visualization/>}></Route>
          <Route path="/game-center" element={<GameCenter/>}>
            <Route index element={<HomePage />} />
            <Route path="ListOne" element={<ListOne />} />
            <Route path="ListTwe" element={<ListTwe />} />
          </Route>
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