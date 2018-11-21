/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Fragment} from 'react';
import {CardDeck} from 'reactstrap';
import {Col} from 'reactstrap';
import NewsCard from './NewsCard.js';
import './NewsCardDeckContainer.scss';

const NewsCardDeckContainer = () => (
    <Fragment>
        <CardDeck>
            <Col className="NewsCardDeckContainer-noGutter" sm="12" md="6" lg="4">
                <NewsCard />
            </Col>
            <Col className="NewsCardDeckContainer-noGutter" sm="12" md="6" lg="4">
                <NewsCard />
            </Col>
            <Col className="NewsCardDeckContainer-noGutter" sm="12" md="6" lg="4">
                <NewsCard />
            </Col>
        </CardDeck>
    </Fragment>
);

export default NewsCardDeckContainer;