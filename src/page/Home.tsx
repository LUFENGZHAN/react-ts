import React, { Component } from 'react';
import  style  from './home.module.scss';
import Bg from 'particles-bg'

class Home extends Component {
    render() {
        return (
            <div className={style.aa}>
                Home
                <Bg  type="cobweb" bg={true}/>
            </div>
            
        );
    }
}

export default Home;