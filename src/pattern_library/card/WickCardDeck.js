/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardDeck.js

    Card Decks for Wick Items
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import {CardDeck} from 'reactstrap';

import WickCardContainer from './WickCardContainer.js';
import NewsCardContainer from '../../page_components/news/NewsCardContainer.js';

import '../../scss_styles/WickCardDeck.scss';

const WickCardDeck = ({cards, useNewsCard, usePadding}) => (
    <Row className={(usePadding ? "WickCardDeck-paddingContainer" : "") + " Wick-row"}>
        <Col md="9">
            <CardDeck>
                {cards.map(card => (
                    (useNewsCard ? (
                        <NewsCardContainer key={card.title} {...card} />
                    ) : (
                        <WickCardContainer key={card.title} {...card} />
                    ))
                ))}
            </CardDeck>
        </Col>
    </Row>
);

export default WickCardDeck;