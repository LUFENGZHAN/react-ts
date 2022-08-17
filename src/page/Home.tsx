import React, { Component } from 'react';
import  style  from './home.module.scss';
class Home extends Component {
    render() {
        return (
            <div className={style.aa}>
                home
                <div className={style.bb}>
                    bb
                    <p>ppp</p>
                </div>
            </div>
        );
    }
}

export default Home;