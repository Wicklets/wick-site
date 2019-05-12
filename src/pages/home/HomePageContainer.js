/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePageContainer.js

    Container for Home page
*/

import React, {Component, Fragment} from 'react';

import HomePage from './HomePage.js';
import Header from '../../site_components/header/Header.js';
import InlineLink from '../../pattern_library/inline_link/WickInlineLink.js';

class HomePageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="wick editor"
                    tagline="games, animations and everything in-between."
                    subtitle="The Wick Editor is a free online tool for creating games, animations, and everything in-between."
                    buttonLabel="Launch Editor"
                    buttonSub={<Fragment>or launch <InlineLink text="Legacy Editor" link="http://wickeditor.com/wick-editor/" /></Fragment>}
                    onClick={() => window.open("http://wickeditor.com/wick-editor/")}
                />
                <HomePage />
            </Fragment>
        );
    }
};

export default HomePageContainer;