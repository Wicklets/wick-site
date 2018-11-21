/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Footer.js

    Footer information for website
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './Footer.scss';

const Footer = () => (
    <div id="Footer-container">
        <Container>
            <Row id="Footer-paddingTopRow" className="Footer-row" />
            <Row id="Footer-contentRow" className="Footer-row">
                <Col xs="4" sm="2" xl="1">
                    <div className="Footer-header">Product</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col xs="4" sm="2" xl={{size: 1, offset: 1}}>
                    <div className="Footer-header">Company</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col xs="4" sm="2" xl={{size: 1, offset: 1}}>
                    <div className="Footer-header">Learn</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col xs="4" sm="2" xl={{size: 1, offset: 1}}>
                    <div className="Footer-header">Support</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col xs="4" sm="2" xl={{size: 1, offset: 1}}>
                    <div className="Footer-header">Social</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
            </Row>
            <Row id="Footer-copyrightRow" className="Footer-row">
                <Col sm="9">
                    © 2018, Wick, Inc. All Rights Reserved.
                </Col>
            </Row>
            <Row id="Footer-paddingBottomRow" className="Footer-row" />
        </Container>
    </div>
);

export default Footer;