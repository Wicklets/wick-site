/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardDeck.js

    Card Decks for Wick Items
*/

import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Row, Col } from 'reactstrap';
import { CardDeck } from 'reactstrap';

import WickCardContainer from './WickCardContainer.js';
import WickPaddingCard from './WickPaddingCard.js';
import WickButton from '../button/WickButton.js';

import '../../scss_styles/WickCardDeck.scss';

const WickCardDeck = ({cards, type, numberPaddingCards, linkButton, usePadding}) => (
    <Fragment>
        <Row className={(usePadding ? "WickCardDeck-paddingContainer" : "") + " Wick-row"}>
            <Col md="9">
                <CardDeck>
                    {cards.map(card => (
                        <WickCardContainer key={card.title} type={type} cardData={card} disabled={card.disabled} onClick={card.onClick} />
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
                    {(linkButton.routerLink ? (
                        <Link to="/learn/" className="WickCardDeck-linkButton">
                            <WickButton text={linkButton.text} block type="body" />
                        </Link>
                    ) : (
                        <WickButton text={linkButton.text} block type="body" onClick={linkButton.onClick} />
                    ))}

                </Col>
            </Row>
        )}
    </Fragment>
);

export default WickCardDeck;
