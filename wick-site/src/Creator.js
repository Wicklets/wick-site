/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Creator.js

    Image and Name component for creators
*/

import React from 'react';
import {Col} from 'reactstrap';
import Img from 'react-image';
import './Creator.scss';

const Creator = ({name, img, includeHeadshot}) => (
    <Col xs="4" sm="3" lg="2">
        {includeHeadshot && (
            <Img src={img} className="Creator-picture" />
        )}
        <div className="Creator-name">{name}</div>
    </Col>
);

export default Creator;