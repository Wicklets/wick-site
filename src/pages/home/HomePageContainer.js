/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePageContainer.js

    Container for Home page
*/

import React, {Component, Fragment} from 'react';

import HomePage from './HomePage.js';
import Header from '../../site_components/header/Header.js';

class HomePageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="wick editor"
                    showButton
                    showSubtitle
                    buttonLabel="get started"
                    onClick={() => window.open("http://wickeditor.com/wick-editor/")}
                >
                    The Wick Editor is a free online tool for creating games, animations, and everything in-between.
                </Header>
                <HomePage />
            </Fragment>
        );
    }
};

export default HomePageContainer;