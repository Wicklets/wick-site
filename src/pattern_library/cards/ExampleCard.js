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

const ExampleCard = ({title, body, image, embed, number, disabled, onClick, isModalOpen, onMouseEnter, onMouseLeave, isContentHovered}) => (
    <Fragment>
        <Card
            className={(disabled ? "ExampleCard-container--disabled" : "ExampleCard-container")}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <CardImg width="100%" src={image} alt="Card image cap" />
            <CardImgOverlay className="ExampleCard-content">
                <CardTitle className={isContentHovered ? "ExampleCard-title" : "ExampleCard-title ExampleCard-title--collapsed"}>{title}</CardTitle>
                {isContentHovered && (
                    <Fragment>
                        <Img className="ExampleCard-arrow" src={arrow} />
                    </Fragment>
                )}
            </CardImgOverlay>
        </Card>
        <WickCardModal title={title} embed={embed} number={number} onClick={onClick} isModalOpen={isModalOpen} />
    </Fragment>
);

export default ExampleCard;