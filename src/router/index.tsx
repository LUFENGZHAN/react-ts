import { Component,Suspense, lazy  } from 'react'

import { Routes, Route,Navigate} from 'react-router-dom';
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Visualization = lazy(() => import('@/pages/Visualization'))
const GameCenter = lazy(() => import('@/pages/GameCenter'))
const NoPage = lazy(() => import('@/components/NoPage/NoPage'))
const HomePage = lazy(() => import('@/pages/GameCenter/HomePage'))
const ListOne = lazy(() => import('@/pages/GameCenter/ListOne'))
const ListTwe = lazy(() => import('@/pages/GameCenter/ListTwe'))
export default class index extends Component {
  render() {
    return window.localStorage.getItem('token') ? (
      <Suspense fallback={<div style={{color: '#000',width:'200px',background: '#fff',fontSize: '18px',margin: '250px auto'}}>加载中...</div>}>
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
        </Suspense>
    ):(
      <Suspense fallback={<div style={{color: '#000',width:'200px',background: '#fff',fontSize: '18px',margin: '250px auto'}}>加载中...</div>}>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Suspense>


      
    )

  }
}