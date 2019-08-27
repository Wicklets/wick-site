/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPageContainer.js

    Container for Community page
*/

import React, {Component, Fragment} from 'react';

import CommunityPage from './CommunityPage.js';
import Header from '../../site_components/header/Header.js';

import ReactGA from 'react-ga'; 


class CommunityPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        ReactGA.pageview('/community');
        return (
            <Fragment>
                <Header
                    title="community"
                    buttonLabel="Visit the Forum"
                    onClick={() => window.open("https://forum.wickeditor.com/")}
                />
                <CommunityPage projects={this.props.projects}/>
            </Fragment>
        );
    }
};

export default CommunityPageContainer;