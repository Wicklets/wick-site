/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPageContainer.js

    Container for Community page
*/

import React, {Component, Fragment} from 'react';

import CommunityPage from './CommunityPage.js';
import Header from '../../site_components/header/Header.js';

class CommunityPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="community"
                    buttonLabel="visit the forum"
                    onClick={() => window.open("https://forum.wickeditor.com/")}
                />
                <CommunityPage />
            </Fragment>
        );
    }
};

export default CommunityPageContainer;