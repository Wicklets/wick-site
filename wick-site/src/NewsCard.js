/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCard.js

    Component for news item info on homepage
*/

import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import './NewsCard.scss';

const NewsCard = ({title, date}) => (
    <Fragment>
        <Card>
            <CardBody>
                <CardTitle className="NewsCard-title">{title}</CardTitle>
                <CardText className="NewsCard-date">{date}</CardText>
            </CardBody>
        </Card>
    </Fragment>
);

export default NewsCard;