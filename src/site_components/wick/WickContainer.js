/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Wick.js

    Top-Level React Component
*/

import React, {Component} from 'react';

import Wick from './Wick.js';

class WickContainer extends Component {
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
            <Wick
                {...this.state}
                onClickChangePage={this.handleClick}
            />
        );
    }
};

export default WickContainer;