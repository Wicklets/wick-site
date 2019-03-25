/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    TutorialCard.js

    Component for Tutorial Cards
*/

import React, { Fragment } from 'react';
import Img from 'react-image';

import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

import arrow from '../../Images/Tutorials/arrow.svg';

import WickCardModal from './WickCardModal.js';

import '../../scss_styles/TutorialCard.scss';

const TutorialCard = ({title, body, image, embed, number, disabled, onClick, isModalOpen}) => (
    <Fragment>
        <Card
            className={(disabled ? "TutorialCard-container--disabled" : "TutorialCard-container")}
            onClick={onClick}
        >
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody className="TutorialCard-content">
                <CardTitle className="TutorialCard-title">{title}</CardTitle>
                <CardText className="TutorialCard-text">{body}</CardText>
                <div className="TutorialCard-arrowSpacer" />
                <Img className="TutorialCard-arrow" src={arrow} />
            </CardBody>
        </Card>
        <WickCardModal title={title} embed={embed} number={number} onClick={onClick} isModalOpen={isModalOpen} />
    </Fragment>
);

export default TutorialCard;