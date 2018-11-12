/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    UpdateTab.js

    Update Info Tab to be displayed on the homepage
*/

import React from 'react';
import {Button} from 'reactstrap';
import './UpdateTab.scss';

const UpdateTab = () => (
    <div id="UpdateTab-container">
        <div id="UpdateTab-version">update 3.5</div>
        <div id="UpdateTab-text">Some exciting description here. Try it out!</div>
        <Button id="UpdateTab-button" outline color="secondary" size="sm">try it</Button>
    </div>
);

export default UpdateTab;