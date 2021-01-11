/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePageContainer.js

    Container for Home page
*/

import React, {Component, Fragment} from 'react';

import HomePage from './HomePage.js';
import Header from '../../site_components/header/Header.js';

import { Link } from "react-router-dom";

import ReactGA from 'react-ga'; 

import '../../scss_styles/WickInlineLink.scss';

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
                    <Header
                        title={title}
                        tagline={tagline}
                        subtitle={subtitle}
                        buttonLabel="Launch Web Editor"
                        buttonSub={<Fragment>or <Link to="/download/" className="WickInlineLink-container">download (beta)</Link></Fragment>}
                        onClick={() => window.open("https://www.wickeditor.com/editor/")}
                    />
                {/* ))} */}
                <HomePage />
            </Fragment>
        );
    }
};

export default HomePageContainer;
