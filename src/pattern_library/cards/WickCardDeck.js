/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardDeck.js

    Card Decks for Wick Items
*/

import React, {Fragment} from 'react';

import {Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import {CardDeck} from 'reactstrap';

import WickCardContainer from './WickCardContainer.js';
import WickPaddingCard from './WickPaddingCard.js';

import '../../scss_styles/WickCardDeck.scss';

const WickCardDeck = ({cards, numberPaddingCards, linkButton, includeModal, useNewsCard, usePadding}) => (
    <Fragment>
        <Row className={(usePadding ? "WickCardDeck-paddingContainer" : "") + " Wick-row"}>
            <Col md="9">
                <CardDeck>
                    {cards.map(card => (
                        <WickCardContainer key={card.title} useNewsCard={useNewsCard} includeModal={includeModal} {...card} />
                    ))}
                    {!!numberPaddingCards && ([...Array(numberPaddingCards).keys()].map(cardNumber => (
                        <WickPaddingCard key={cardNumber} />
                    )))}
                </CardDeck>
            </Col>
        </Row>
        {linkButton && (
            <Row className="Wick-row">
                <Col xs="6" sm="4" md="3" lg="2">
                    <Button
                        color="success"
                        block
                        onClick={linkButton.onClick}
                    >
                        {linkButton.text}
                    </Button>
                </Col>
            </Row>
        )}
    </Fragment>
);

export default WickCardDeck;