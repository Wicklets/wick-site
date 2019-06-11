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
        return (
            <Fragment>
                {(this.state.windowSize < 992 ? (
                    <Header
                        title="wick editor"
                        tagline="games, animations and everything in-between."
                        subtitle="The Wick Editor is a free online tool for creating games, animations, and everything in-between!"
                    />
                ) : (
                    <Header
                        title="wick editor"
                        tagline="games, animations and everything in-between."
                        subtitle="The Wick Editor is a free online tool for creating games, animations, and everything in-between!"
                        buttonLabel="Launch Editor"
                        buttonSub={<Fragment>or launch the <InlineLink text="Legacy Editor" link="http://wickeditor.com/wick-editor/" /></Fragment>}
                        onClick={() => window.open("https://alpha.wickeditor.com")}
                    />
                ))}
                <HomePage />
            </Fragment>
        );
    }
};

export default HomePageContainer;