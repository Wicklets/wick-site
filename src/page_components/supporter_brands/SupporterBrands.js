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

import '../../scss_styles/SupporterBrands.scss';

const SupporterBrands = () => (
    <Row className="Wick-row">
        <Col xs="10" md="8" lg="6" xl="5">
            <div className="SupporterBrands-row">
                <Img src={mozilla} />
                <Img src={studio} />
            </div>
            <div className="SupporterBrands-spacer" />
            <div className="SupporterBrands-row">
                <Img src={henryarmero} />
                <Img src={olympus} />
                <Img src={bxa} />
            </div>
        </Col>
    </Row>
);

export default SupporterBrands;