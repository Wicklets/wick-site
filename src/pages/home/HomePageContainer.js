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

import ReactGA from 'react-ga'; 


class HomePageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowSize: window.innerWidth
        };
    }

    getWindowSize = () => {this.setState({windowSize: window.innerWidth})};

    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
        window.addEventListener('resize', this.getWindowSize);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.getWindowSize);
    }

    render() {
        ReactGA.pageview("/");

        let title = "wick editor";
        let tagline = "games, animations and everything in-between.";
        let subtitle = "The Wick Editor is a free, open-source tool for creating games, animations, and everything in-between!";
        return (
            <Fragment>
                {(this.state.windowSize < 768 ? (
                    <Header
                        title={title}
                        tagline={tagline}
                        subtitle={subtitle}
                        buttonLabel="Launch Editor"
                        onClick={() => window.open("https://editor.wickeditor.com")}
                    />
                ) : (
                    <Header
                        title={title}
                        tagline={tagline}
                        subtitle={subtitle}
                        buttonLabel="Launch Web Editor"
                        buttonSub={<Fragment>or <InlineLink text="download (beta)" link="https://github.com/Wicklets/wick-editor/releases/tag/v1.18.0-prerelease" /></Fragment>}
                        onClick={() => window.open("https://editor.wickeditor.com")}
                    />
                ))}
                <HomePage />
            </Fragment>
        );
    }
};

export default HomePageContainer;
