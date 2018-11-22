/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Content.js

    Renders the content of the website depending on its state
*/

import React, {Fragment} from 'react';
import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';

const Content = ({page}) => (
    <Fragment>
        {page === "home" && (
            <HomePage />
        )}
        {page === "about" && (
            <AboutPage />
        )}
    </Fragment>
);

export default Content