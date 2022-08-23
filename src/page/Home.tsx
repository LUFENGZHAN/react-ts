import React, { Component } from 'react';
import style from './home.module.scss';
import { NavLink,Routes,Route,Navigate } from 'react-router-dom'
import Bg from 'particles-bg'
import Home1 from '../components/Home/Home1'
import Home2 from '../components/Home/Home2'
import { route } from '../App'
function links({isActive}:any){
    return isActive ? style.bb : style.cc
  
  }
const Router = (data: any): any => {
    return route.map((val: any, index: any) => {
        return (
            <NavLink key={index} to={val.to} className={links}>{val.name}</NavLink>
        )
    })
}
class Home extends Component {
    state = {
    }
    render() {        
        return (
            <div className={style.aa}>
                <Router />
                <div>
                    <NavLink to='/Home/Home1'>home1</NavLink>
                    <NavLink to=''>home2</NavLink>
                <Routes>
                    <Route path="home1" element={<Home1/>}></Route>
                    <Route path="" element={<Home2/>}></Route>
                    <Route path="*" element={<Navigate to="/404" />}></Route>
                </Routes>
                </div>
                <Bg type="cobweb" bg={true} />
            </div>

        );
    }
}
export default Home;