/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Content.js

    Renders the content of the website depending on its state
*/

import React, {Fragment} from 'react';
import HomePage from './HomePage.js';
import AboutPageContainer from './AboutPageContainer.js';
import CommunityPageContainer from './CommunityPageContainer.js'

const Content = ({page}) => (
    <Fragment>
        {page === "home" && (
            <HomePage />
        )}
        {page === "about" && (
            <AboutPageContainer />
        )}
        {page === "community" && (
            <CommunityPageContainer />
        )}
    </Fragment>
);

export default Content