/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeck.js

    Card Decks for Wick News Items
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import {CardDeck} from 'reactstrap';

import NewsCardContainer from './NewsCardContainer.js';

const NewsCardDeck = ({newsItems}) => (
    <Row className="Wick-row">
        <Col md="9">
            <CardDeck>
                {newsItems.map(newsItem => (
                    <NewsCardContainer key={newsItem.title} {...newsItem} />
                ))}
            </CardDeck>
        </Col>
    </Row>
);

export default NewsCardDeck;