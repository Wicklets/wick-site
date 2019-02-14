/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContentLink.js

    Component for Wick Link with image and content
*/

import React from 'react';
import Img from 'react-image';

import arrow from '../../Images/Tutorials/arrow.svg';

import '../../scss_styles/ContentLink.scss';

const ContentLink = ({image, title, text, onClick}) => (
    <div className="ContentLink-container" onClick={onClick}>
        <Img className="ContentLink-image" src={image} alt="Content Link Image" />
        <div className="ContentLink-title">{title}</div>
        <div className="ContentLink-text">{text}</div>
        <Img className="ContentLink-arrow" src={arrow} />
    </div>
);

export default ContentLink