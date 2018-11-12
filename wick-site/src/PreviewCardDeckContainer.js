/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCardDeckContainer.js

    Container for Example/Tutorial Card Decks on the Homepage
*/

import React, {Fragment} from 'react';
import {CardDeck} from 'reactstrap';
import PreviewCardContainer from './PreviewCardContainer.js';

const PreviewCardDeckContainer = () => (
    <Fragment>
        <CardDeck>
            <PreviewCardContainer />
            <PreviewCardContainer />
            <PreviewCardContainer />
        </CardDeck>
    </Fragment>
);

export default PreviewCardDeckContainer;