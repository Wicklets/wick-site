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
                <Img className="supporter-brand large" src={mozilla} alt="Mozilla Logo" />
                <Img className="supporter-brand large" src={studio} alt="Frank-Ratchye Studio for Creative Inquiry Logo"/>
            </div>
            <div className="SupporterBrands-spacer" />
            <div className="SupporterBrands-row">
                <Img className="supporter-brand medium" src={cosa} alt="Clinic for Open Source Art Logo" />
            </div>
            <div className="SupporterBrands-spacer" />
            <div className="SupporterBrands-row">
                <Img className="supporter-brand small" src={henryarmero} alt="Henry Armero Award Logo"/>
                <Img className="supporter-brand small" src={olympus} alt="Oluympus Logo"/>
                <Img className="supporter-brand small" src={bxa} alt="BXA Logo"/>
            </div>
        </Col>
    </Row>
);

export default SupporterBrands;