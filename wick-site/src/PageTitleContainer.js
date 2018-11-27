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
                onClick={() => window.open("http://wickeditor.com/wick-editor/")}
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
                onClick={() => window.open("https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg")}
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
                onClick={() => window.open("https://forum.wickeditor.com/")}
            />
        )}
    </Fragment>
);

export default PageTitleContainer;