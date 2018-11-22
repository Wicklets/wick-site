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
                showButton={true}
                buttonLabel="get started"
            >
                The Wick Editor is a free online tool for creating games, animations, and everything in-between.
            </PageTitle>
        )}
        {page === "learn" && (
            <PageTitle
                title="get started"
                showButton={true}
                buttonLabel="try the tutorial"
            >
                Hit the ground running with the basics of wick editor by trying out our starter tutorial.
            </PageTitle>
        )}
        {page === "about" && (
            <PageTitle
                title="about us"
                showButton={false}
                buttonLabel=""
            >
                What is Wick Editor?
            </PageTitle>
        )}
        {page === "community" && (
            <PageTitle
                title="community"
                showButton={true}
                buttonLabel="visit the forum"
            >
                wick editor forum
            </PageTitle>
        )}
    </Fragment>
);

export default PageTitleContainer;