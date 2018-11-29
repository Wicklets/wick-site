/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCard.js

    Component for news item info on homepage
*/

import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {Button} from 'reactstrap';
import '../../scss_styles/NewsCard.scss';

const NewsCard = ({title, date, hasExternalLink, link}) => (
    <Fragment>
        <Card className="NewsCard-container">
            <CardBody>
                <CardTitle className="NewsCard-title">{title}</CardTitle>
                <CardText className="NewsCard-date">{date}</CardText>
                {hasExternalLink && (
                    <Button
                        color="link"
                        size="sm"
                        onClick={() => window.open(link)}
                    >
                        read more
                    </Button>
                )}
            </CardBody>
        </Card>
    </Fragment>
);

export default NewsCard;