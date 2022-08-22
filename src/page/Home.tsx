import React, { Component } from 'react';
import style from './home.module.scss';
import { NavLink } from 'react-router-dom'
import Bg from 'particles-bg'
import { links, route } from '../App'
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
                <Bg type="cobweb" bg={true} />
            </div>

        );
    }
}
export default Home;