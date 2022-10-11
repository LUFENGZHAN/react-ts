import { Component,createContext } from 'react';
import style from './scss/home.module.scss';
import { NavLink,Outlet } from 'react-router-dom'
import Bg from 'particles-bg'
import Navigation from '../components/navigation/Navigation'
export const Conttext = createContext(0)
class Home extends Component {
    state = {
        num:1,
    }
    handle=()=>{
        this.setState({num:this.state.num+1})
    }
    render() {        
        return (
            <div className={style.container}>
                <Conttext.Provider value={this.state.num}>
                <Navigation/>
                </Conttext.Provider>
                <h1 onClick={this.handle}>
                    {this.state.num}
                </h1>
                <Bg type="cobweb" bg={true} />
            </div>

        );
    }
}
export default Home;