/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPageContainer.js

    Container for Learn page
*/

import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import Header from '../../site_components/header/Header.js';
import TabbedInterface from '../../page_components/TabbedInterface/TabbedInterface.js';

import { WickSmallSpacer, WickLargeSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';
import ExampleCardBlockContainer from '../../page_components/examples/ExampleCardBlockContainer.js';
import TutorialCardBlockContainer from '../../page_components/tutorials/TutorialCardBlockContainer.js';
import ReferenceList from '../../page_components/reference/ReferenceList.js';

import './LearnPage.scss';

class LearnPageContainer extends Component {
    constructor(props) {
        super(props);

        let location = this.props.location.pathname;
        let currentPageRoute = "tutorials";
        if (location.toString().replace('/learn','') && location.toString().replace('/learn','') !== '/'){
            let trimmedLocation = location.toString().replace('/learn','');
            currentPageRoute = trimmedLocation.slice(1, trimmedLocation.length);
        }

        this.state = {
            currentPage: currentPageRoute,
            areExamplesExpanded: false,
            areTutorialsExpanded: false,
            shouldCollapseCards: false,
            isModalOpen: false
        };
    }

    renderTutorials = () => {
        return(
            <Fragment>
                <p className="subtext">Here are a few tutorials to help you get started with.</p>
                <TutorialCardBlockContainer />
            </Fragment>
        )
    }
    renderExamples = () => {
        return(
            <Fragment>
                <p className="subtext">Here are some examples that you can download and open in Wick Editor!</p>
                <ExampleCardBlockContainer />
            </Fragment>
        )
    }
    renderReference = () => {
        return(
            <Fragment>
                <p className="subtext">The full Wick Editor programming reference!</p>
                <ReferenceList />
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                <title>The Wick Editor - Learn</title>
                <meta name="description" content="Here are a few tutorials to help you get started." />
                </Helmet>

                <Header
                    title="get started"
                    tagline="Hit the ground running by learning the basics of Wick Editor."
                />
                <Container className="fadeIn animated">
                    <TabbedInterface className="tab-interface"
                        tabNames={["Tutorials", "Examples", "Reference"]} 
                        currentTab={this.state.currentPage.charAt(0).toUpperCase() + this.state.currentPage.slice(1)}>          
                        {this.renderTutorials()}
                        {this.renderExamples()}
                        {this.renderReference()}
                    </TabbedInterface>
                    <WickLargeSpacer />
                    <ExternalContacts />
                    <WickSmallSpacer />
                </Container>
            </Fragment>
        );
    }
};

export default withRouter(LearnPageContainer);
