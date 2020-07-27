/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickResponsiveImage.js

    Component to wrap image in a reactstrap col element (make it responsive)
*/

import React from 'react';
import Img from 'react-image';

import { Row, Col } from 'reactstrap';

import '../../scss_styles/WickResponsiveImage.scss';

const WickResponsiveImage = ({image, ...sizes}) => (
    <Row className="WickResponsiveImage-container Wick-row">
        <Col {...sizes}>
            <Img src={image} className="WickResponsiveImage-image" alt="screenshot of wick editor"/>
        </Col>
    </Row>
);

export default WickResponsiveImage;