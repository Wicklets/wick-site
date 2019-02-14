/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCard.js

    Component for news item info on homepage
*/

import React from 'react';
import Img from 'react-image';

import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

import arrow from '../../Images/Tutorials/arrow.svg';

import '../../scss_styles/NewsCard.scss';

const NewsCard = ({title, text, date, link, onClick}) => (
    <Card className="NewsCard-container" onClick={onClick}>
        <CardBody>
            <CardTitle className="NewsCard-title">{title}</CardTitle>
            <CardText className="NewsCard-text">{text}</CardText>
        </CardBody>
        <CardFooter className="NewsCard-footer">
            <CardText className="NewsCard-date">{date}</CardText>
            <Img className="NewsCard-arrow" src={arrow} />
        </CardFooter>
    </Card>
);

export default NewsCard;