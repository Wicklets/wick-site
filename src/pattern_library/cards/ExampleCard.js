/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCard.js

    Component for Example Cards
*/

import React, { Fragment } from 'react';
import Img from 'react-image';

import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

import arrow from '../../Images/Tutorials/arrow.svg';

import WickCardModal from './WickCardModal.js';

import '../../scss_styles/ExampleCard.scss';

const ExampleCard = ({cardData, disabled, onClick, isModalOpen}) => (
    <Fragment>
        <Card
            className={(disabled ? "ExampleCard-container--disabled" : "ExampleCard-container")}
            onClick={onClick}
        >
            <CardImg width="100%" src={cardData.image} alt="Card image cap" />
            <CardImgOverlay className="ExampleCard-content">
                <CardTitle className="ExampleCard-title">{cardData.title}</CardTitle>
                <Img className="ExampleCard-arrow" src={arrow} />
            </CardImgOverlay>
        </Card>
        <WickCardModal 
        cardData={cardData}
        onClick={onClick} 
        isModalOpen={isModalOpen} />
    </Fragment>
);

export default ExampleCard;