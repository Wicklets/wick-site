/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPageContainer.js

    Container for About page
*/

import React, {Component, Fragment} from 'react';

import AboutPage from './AboutPage.js';
import Header from '../../site_components/header/Header.js';

class AboutPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="about us"
                />
                <AboutPage />
            </Fragment>
        );
    }
};

export default AboutPageContainer;