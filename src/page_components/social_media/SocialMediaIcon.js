/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SocialMediaIcon.js

    Links for external social media and contacts
*/

import React from 'react';

import Img from 'react-image';

import '../../scss_styles/SocialMediaIcon.scss';

const SocialMediaIcon = ({image, highlight, link}) => (
    <a className="SocialMediaIcon-container" href={link} target="_blank" rel="noopener noreferrer">
        <Img src={image} className="SocialMediaIcon-icon" />
        <Img src={highlight} className="SocialMediaIcon-highlight" />
    </a>
);

export default SocialMediaIcon;