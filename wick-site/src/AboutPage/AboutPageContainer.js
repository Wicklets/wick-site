/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPageContainer.js

    Container for About page (allows us to scroll back to top on page change)
*/

import React, {Component} from 'react';

import AboutPage from './AboutPage.js';

class AboutPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
    }

    render() {
        return (
            <AboutPage />
        );
    }
};

export default AboutPageContainer;