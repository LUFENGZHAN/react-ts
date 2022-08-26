import { Component } from 'react';
import style from './scss/home.module.scss';
import { NavLink,Routes,Route,Navigate } from 'react-router-dom'
import Bg from 'particles-bg'
import Navigation from '../components/navigation/Navigation'
import Home1 from '../components/Home/Home1'
import Home2 from '../components/Home/Home2'

class Home extends Component {
    state = {
    }
    render() {        
        return (
            <div className={style.container}>
                <Navigation/>
                <div>
                    <NavLink to=''>home1</NavLink>
                    <NavLink to='/home/home2'>home2</NavLink>
                    <Routes>
                        <Route path="" element={<Home1/>}></Route>
                        <Route path="home2" element={<Home2/>}></Route>
                        <Route path="*" element={<Navigate to="/404" />}></Route>
                    </Routes>
                </div>
                <Bg type="cobweb" bg={true} />
            </div>

        );
    }
}
export default Home;