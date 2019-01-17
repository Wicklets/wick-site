/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Supporter.js

    Image and Name component for supporters
*/

import React from 'react';

import {Col} from 'reactstrap';
import Img from 'react-image';

import '../../scss_styles/Supporter.scss';

const Supporter = ({name, img}) => (
    <Col className="Supporter-container" xs="3" sm="2" lg="1">
        <Img src={img} className="Supporter-picture" />
        <div className="Supporter-name">{name}</div>
    </Col>
);

export default Supporter;