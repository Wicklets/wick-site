/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickInlineLink.js

    Links for hyperlinks
*/

import React from 'react';

import '../../scss_styles/WickInlineLink.scss';

const WickInlineLink = ({text, link}) => (
    <a className="WickInlineLink-container" href={link} target="_blank" rel="noopener noreferrer">
        {text}
    </a>
);

export default WickInlineLink;