/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCard.js

    Component for Cards
*/

import React, {Fragment} from 'react';
import Img from 'react-image';

import {Card, CardImg, CardText, CardTitle, CardImgOverlay} from 'reactstrap';

import Arrow from '../../Images/Tutorials/arrow.svg';

import '../../scss_styles/PreviewCard.scss';

const WickCard = ({title, body, image, onClick, toggleContent, isContentExpanded}) => (
    <Fragment>
        <Card className="PreviewCard-container" onMouseEnter={toggleContent} onMouseLeave={toggleContent} onClick={onClick}>
            <CardImg width="100%" src={image} alt="Card image cap" />
            <CardImgOverlay className="PreviewCard-content">
                <CardTitle className={isContentExpanded ? "PreviewCard-title" : "PreviewCard-title PreviewCard-title--collapsed"}>{title}</CardTitle>
                {isContentExpanded && (
                    <Fragment>
                        <CardText className="PreviewCard-text">{body}</CardText>
                        <Img src={Arrow} />
                    </Fragment>
                )}
            </CardImgOverlay>
        </Card>
    </Fragment>
);

export default WickCard;