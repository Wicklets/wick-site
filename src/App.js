/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Wick.js

    Top-Level React Component
*/

import React, {Component} from 'react';

import HeaderContainer from './NavBar/HeaderContainer.js';
import Footer from './Footer/Footer.js';

import './scss_styles/Wick.scss';

class App extends Component {


    render() {
        return(
            <div>
            <div className="Wick">
                <HeaderContainer
                    page={this.state.page}
                    onClickChangePage={this.handleClick}
                />
                <Footer />
            </div>
            </div>
        );
    }
};

export default App;
