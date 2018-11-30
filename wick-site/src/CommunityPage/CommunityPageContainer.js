/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPageContainer.js

    Container for Community page (allows us to scroll back to top on page change)
*/

import React, {Component} from 'react';
import CommunityPage from './CommunityPage.js';

class CommunityPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <CommunityPage />
        );
    }
};

export default CommunityPageContainer;