/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PageTitleContainer.js

    Container Component for the title and subtitle bar for each page
*/

import React, {Fragment} from 'react';
import PageTitle from './PageTitle.js';

const PageTitleContainer = ({page}) => (
    <Fragment>
        {page === "home" && (
            <PageTitle
                title="wick editor"
                showButton
                showSubtitle
                buttonLabel="get started"
            >
                The Wick Editor is a free online tool for creating games, animations, and everything in-between.
            </PageTitle>
        )}
        {page === "learn" && (
            <PageTitle
                title="get started"
                showButton
                showSubtitle
                buttonLabel="try the tutorial"
            >
                Hit the ground running with the basics of wick editor by trying out our starter tutorial.
            </PageTitle>
        )}
        {page === "about" && (
            <PageTitle
                title="about us"
                buttonLabel=""
            />
        )}
        {page === "community" && (
            <PageTitle
                title="community"
                showButton
                buttonLabel="visit the forum"
            />
        )}
    </Fragment>
);

export default PageTitleContainer;