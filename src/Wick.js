/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Wick.js

    Top-Level React Component
*/

import React, {Component} from 'react';

import WickRouterContainer from './site_components/router/WickRouterContainer.js';
import Footer from './Footer/Footer.js';

import './scss_styles/Wick.scss';

class Wick extends Component {
    constructor(props) {
        super(props);

        // Website current page
        this.state = {
            page: "home"
        };
    }

    handleClick = (page) => {this.setState({page})}

    render() {
        return(
            <div className="Wick">
                <WickRouterContainer
                    page={this.state.page}
                    onClickChangePage={this.handleClick}
                />
                <Footer />
            </div>
        );
    }
};

export default Wick;