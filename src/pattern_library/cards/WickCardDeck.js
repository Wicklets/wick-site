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

import '../../scss_styles/WickCardDeck.scss';

const WickCardDeck = ({cards, useNewsCard, usePadding}) => (
    <Row className={(usePadding ? "WickCardDeck-paddingContainer" : "") + " Wick-row"}>
        <Col md="9">
            <CardDeck>
                {cards.map(card => (
                    <WickCardContainer key={card.title} useNewsCard={useNewsCard} {...card} />
                ))}
            </CardDeck>
        </Col>
    </Row>
);

export default WickCardDeck;