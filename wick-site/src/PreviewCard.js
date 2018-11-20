/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCard.js

    Component for Example/Tutorial Cards on the Homepage
*/

import React, {Fragment} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap';
import './PreviewCard.scss';

const PreviewCard = ({onMouseEnter, onMouseLeave, displayOverlay}) => (
    <Fragment>
        <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle className="PreviewCard-title">type something</CardTitle>
                {/* <div className={(displayOverlay ? "PreviewCard-underline--show" : "PreviewCard-underline--hide")} /> */}
                <CardText className="PreviewCard-text">description type something lorem ipsum type something lorem ipsum type something lorem ipsum</CardText>
            </CardBody>
            {displayOverlay && (
                <CardImgOverlay className="PreviewCard-overlay" />
            )}
        </Card>
    </Fragment>
);

export default PreviewCard;