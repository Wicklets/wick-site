/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCardDeckContainer.js

    Container for Example/Tutorial Card Decks on the Homepage
*/

import React, {Fragment} from 'react';
import {CardDeck} from 'reactstrap';
import {Col} from 'reactstrap';
import PreviewCardContainer from './PreviewCardContainer.js';
import './PreviewCardDeckContainer.scss';

const PreviewCardDeckContainer = () => (
    <Fragment>
        <CardDeck>
            <Col className="PreviewCardDeckContainer-noGutter" sm="12" md="6" lg="4">
                <PreviewCardContainer />
            </Col>
            <Col className="PreviewCardDeckContainer-noGutter" sm="12" md="6" lg="4">
                <PreviewCardContainer />
            </Col>
            <Col className="PreviewCardDeckContainer-noGutter" sm="12" md="6" lg="4">
                <PreviewCardContainer />
            </Col>
        </CardDeck>
    </Fragment>
);

export default PreviewCardDeckContainer;