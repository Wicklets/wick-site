/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickButton.js

    Component for Wick Buttons
*/

import React from 'react';

import {Button} from 'reactstrap';

import '../../scss_styles/WickButton.scss';

const WickButton = ({text, size, block, type, onClick}) => (
    <Button
        className={"WickButton-button WickButton-button--" + type}
        size={size}
        block={block}
        onClick={onClick}
    >
        {text}
    </Button>
);

export default WickButton;