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

const ContentLink = ({image, title, text, onClick, toggleContent, isContentHovered}) => (
    <div className="ContentLink-container" onMouseEnter={toggleContent} onMouseLeave={toggleContent} onClick={onClick}>
        <Img className="ContentLink-image" src={image} alt="Content Link Image" />
        <div className="ContentLink-title">{title}</div>
        <div className="ContentLink-text">{text}</div>
        {(isContentHovered ? (
            <Img className="ContentLink-arrowLink" src={arrow} />
        ) : (
            <div className="ContentLink-arrowSpacer" />
        ))}

    </div>
);

export default ContentLink