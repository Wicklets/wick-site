/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCard.js

    Component for Example/Tutorial Cards on the Homepage
*/

import React, {Fragment} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap';
import '../../scss_styles/PreviewCard.scss';

const PreviewCard = ({title, body, image, isClickable, onClick, onMouseEnter, onMouseLeave, displayOverlay}) => (
    <Fragment>
        <Card className={(isClickable ? "PreviewCard-container" : "")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle className="PreviewCard-title">{title}</CardTitle>
                <CardText className="PreviewCard-text">{body}</CardText>
            </CardBody>
            {isClickable && displayOverlay && (
                <CardImgOverlay className="PreviewCard-overlay" />
            )}
            {!isClickable && (
                <CardImgOverlay className="PreviewCard-disabled" />
            )}
        </Card>
    </Fragment>
);

export default PreviewCard;