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

const NewsCard = ({cardData, onClick, onKeyDown}) => (
    <Card role="button" tabindex="0"
    className="NewsCard-container" onClick={onClick} onKeyDown={onKeyDown}>
        <CardBody>
            <CardTitle className="NewsCard-title">{cardData.title}</CardTitle>
            <CardText className="NewsCard-text">{cardData.text}</CardText>
        </CardBody>
        <CardFooter className="NewsCard-footer">
            <CardText className="NewsCard-date">{cardData.date}</CardText>
            <Img className="NewsCard-arrow" src={arrow} alt="Arrow Icon"/>
        </CardFooter>
    </Card>
);

export default NewsCard;