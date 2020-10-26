/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickButton.js

    Component for Wick Buttons
*/

import React from 'react';

import {Button} from 'reactstrap';

import '../../scss_styles/WickButton.scss';

const WickButton = ({icon, iconAlt, text, size, block, type, downloadButtonType, thicc, onClick}) => (
    (!downloadButtonType) ?
    <Button
        className={"WickButton-button " + (thicc ? "WickButton-button--thicc " : "") + "WickButton-button--" + type}
        size={size}
        block={block}
        onClick={onClick}
    >
        {text}
    </Button>
    :
    <Button
        className={"WickButton-button " + (thicc ? "WickButton-button--thicc " : "") + "WickButton-button--" + type + " WickButton-button--download"}
        size={size}
        block={block}
        onClick={onClick}
    >
        <img src={icon} alt={iconAlt} className="WickButton-icon"></img>
        <div className="WickButton-text">
            <div>{text}</div>
            <div>{"1.18 for "+downloadButtonType}</div>
        </div>
    </Button>
);

export default WickButton;