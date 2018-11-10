/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Footer.js

    Footer information for website
*/

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './Footer.scss';

const Footer = () => (
    <Fragment>
        <Container>
            <Row id="paddingRow" />
            <Row id="contentRow">
                <Col sm="1">
                    <div className="footerHeader">Product</div>
                    <div className="footerContent">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="footerHeader">Company</div>
                    <div className="footerContent">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="footerHeader">Learn</div>
                    <div className="footerContent">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="footerHeader">Support</div>
                    <div className="footerContent">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col sm={{size: 1, offset: 1}}>
                    <div className="footerHeader">Social</div>
                    <div className="footerContent">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
            </Row>
            <Row id="copyrightRow">
                <Col sm="9">
                    © 2017, Wick, Inc. All Rights Reserved.
                </Col>
            </Row>
        </Container>
    </Fragment>
);

export default Footer;