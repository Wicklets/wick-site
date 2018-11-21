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
    </Fragment>
);

export default PageTitleContainer;