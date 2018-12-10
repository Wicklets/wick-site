/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Content.js

    Renders the content of the website depending on its state
*/

import React, {Fragment} from 'react';

import HomePageContainer from './HomePage/HomePageContainer.js';
import AboutPageContainer from './AboutPage/AboutPageContainer.js';
import LearnPageContainer from './LearnPage/LearnPageContainer.js';

import CommunityPageContainer from './CommunityPage/CommunityPageContainer.js'

const Content = ({page}) => (
    <Fragment>
        {page === "home" && (
            <HomePageContainer />
        )}
        {page === "about" && (
            <AboutPageContainer />
        )}
        {page === "learn" && (
            <LearnPageContainer />
        )}
        {page === "community" && (
            <CommunityPageContainer />
        )}
    </Fragment>
);

export default Content