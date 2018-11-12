/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCard.js

    Component for news item info on homepage
*/

import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import './NewsCard.scss';

const NewsCard = () => (
    <Fragment>
        <Card>
            <CardBody>
                <CardTitle>News Item</CardTitle>
            </CardBody>
        </Card>
    </Fragment>
);

export default NewsCard;