/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupporterBrands.js

    Component for the Wick Supporter's Brand Logos
*/

import React from 'react';
import Img from 'react-image';

import { Row, Col } from 'reactstrap';

import mozilla from '../../Images/Supporters/mozilla.svg';
import studio from '../../Images/Supporters/studio.svg';
import henryarmero from '../../Images/Supporters/henryarmero.svg';
import olympus from '../../Images/Supporters/olympus.svg';
import bxa from '../../Images/Supporters/bxa.svg';
import cosa from '../../Images/Supporters/cosa_logo.png';

import '../../scss_styles/SupporterBrands.scss';

const SupporterBrands = () => (
    <Row className="Wick-row">
        <Col xs="10" md="8" lg="6" xl="5">
            <div className="SupporterBrands-row">
                <Img className="supporter-brand large" src={mozilla} />
                <Img className="supporter-brand large" src={studio} />
            </div>
            <div className="SupporterBrands-spacer" />
            <div className="SupporterBrands-row">
                <Img className="supporter-brand medium" src={cosa} />
            </div>
            <div className="SupporterBrands-spacer" />
            <div className="SupporterBrands-row">
                <Img className="supporter-brand small" src={henryarmero} />
                <Img className="supporter-brand small" src={olympus} />
                <Img className="supporter-brand small" src={bxa} />
            </div>
        </Col>
    </Row>
);

export default SupporterBrands;