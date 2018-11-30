/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePageContainer.js

    Container for Home page (allows us to scroll back to top on page change)
*/

import React, {Component} from 'react';
import HomePage from './HomePage.js';

class HomePageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
    }

    render() {
        return (
            <HomePage />
        );
    }
};

export default HomePageContainer;