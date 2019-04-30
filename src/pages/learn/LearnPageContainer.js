/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPageContainer.js

    Container for Learn page
*/

import React, { Component, Fragment } from 'react';

import LearnPage from './LearnPage.js';
import Header from '../../site_components/header/Header.js';

class LearnPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            areExamplesExpanded: false,
            areTutorialsExpanded: false,
            shouldCollapseCards: false
        };

    }

    shouldCollapseCards = () => {
        var width = window.innerWidth;
        var shouldCollapseCards = width < 992 // coded to match reactstrap cutoff
        this.setState({shouldCollapseCards});
    }

    expandExamples = () => this.setState({areExamplesExpanded: true});

    expandTutorials = () => this.setState({areTutorialsExpanded: true});

    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
        window.addEventListener('resize', this.shouldCollapseCards);
        this.shouldCollapseCards();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.shouldCollapseCards);
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="get started"
                    subtitle="Hit the ground running with the basics of wick editor by trying out our starter tutorial."
                    buttonLabel="Try the Tutorial"
                    onClick={() => window.open("http://wickeditor.com/#tutorials")}
                />
                <LearnPage {...this.state} expandExamples={this.expandExamples} expandTutorials={this.expandTutorials} />
            </Fragment>
        );
    }
};

export default LearnPageContainer;