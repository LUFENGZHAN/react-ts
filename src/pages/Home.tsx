import { Component } from 'react';
import style from './scss/home.module.scss';
import Bg from 'particles-bg'
import Navigation from '@/components/navigation/Navigation'
let he = document.body
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
                <Navigation/>
                <h1 onClick={this.handle}>
                    {this.state.num}
                </h1>
                <Bg type="cobweb" bg={true} />
            </div>

        );
    }
}
export default Home;