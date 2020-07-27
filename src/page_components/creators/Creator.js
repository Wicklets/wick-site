/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Creator.js

    Image and Name component for creators
*/

import React from 'react';

import {Col} from 'reactstrap';
import Img from 'react-image';

import '../../scss_styles/Creator.scss';

const Creator = ({name, role, img, includeHeadshot}) => (
    <Col xs="4" sm="3" lg="2">
        {includeHeadshot && (
            <Img src={img} className="Creator-picture" alt={name+" photo"}/>
        )}
        <div className="Creator-name">{name}</div>
        <div className="Creator-role">{role}</div>
    </Col>
);

export default Creator;
