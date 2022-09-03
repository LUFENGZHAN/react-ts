import { Component } from 'react';
import style from './scss/home.module.scss';
import { NavLink,Routes,Route,Navigate,Link } from 'react-router-dom'
import Bg from 'particles-bg'
import Navigation from '../components/navigation/Navigation'

class Home extends Component {
    state = {
    }
    render() {        
        return (
            <div className={style.container}>
                <Navigation/>
                <div>
                </div>
                <Bg type="cobweb" bg={true} />
            </div>

        );
    }
}
export default Home;