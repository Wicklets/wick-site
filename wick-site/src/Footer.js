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
            <Row id="Footer-paddingRow" />
            <Row id="Footer-contentRow">
                <Col sm="1">
                    <div className="Footer-header">Product</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="Footer-header">Company</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="Footer-header">Learn</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="Footer-header">Support</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="Footer-header">Social</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
            </Row>
            <Row id="Footer-copyrightRow">
                <Col sm="9">
                    © 2017, Wick, Inc. All Rights Reserved.
                </Col>
            </Row>
        </Container>
    </div>
);

export default Footer;