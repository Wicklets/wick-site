/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCard.js

    Component for Example Cards
*/

import React, { Fragment } from 'react';
import Img from 'react-image';

import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

import arrow from '../../Images/Tutorials/arrow.svg';

import WickCardModal from './WickCardModal.js';

import '../../scss_styles/ExampleCard.scss';

const ExampleCard = ({cardData, disabled, onClick, onKeyDown, isModalOpen}) => (
    <Fragment>
        <Card role="button" tabindex="0" aria-pressed={isModalOpen}
            className={(disabled ? "ExampleCard-container--disabled" : "ExampleCard-container")}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            <CardImg top width="100%" src={cardData.image} alt={cardData.title+" Example Screenshot"} />
            <CardBody className="TutorialCard-content">
                <CardTitle className="TutorialCard-title">{cardData.title}</CardTitle>
                <CardText className="TutorialCard-text">{cardData.body}</CardText>
                <div className="TutorialCard-arrowSpacer" />
                <Img className={"TutorialCard-arrow" + (disabled ? " TutorialCard-arrow--disabled" : "")} src={arrow} alt="arrow icon"/>
            </CardBody>
        </Card>
        <WickCardModal
        cardType="example"
        cardData={cardData}
        onClick={onClick}
        isModalOpen={isModalOpen} />
    </Fragment>
);

export default ExampleCard;
