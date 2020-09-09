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

const ContentLink = ({image, alt, title, text, onClick}) => (
    <button className="ContentLink-container" onClick={onClick}>
        <Img className="ContentLink-image" src={image} alt={alt} />
        <div className="ContentLink-title">{title}</div>
        <div className="ContentLink-text">{text}</div>
        <Img className="ContentLink-arrow" src={arrow} alt="Arrow Icon"/>
    </button>
);

export default ContentLink