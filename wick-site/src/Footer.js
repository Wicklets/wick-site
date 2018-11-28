/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Footer.js

    Footer information for website
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import InfiniteScrollImageContainer from './InfiniteScrollImageContainer.js';
import footerimage from './footerimage.svg';
import footerpaddingleft from './footerpaddingleft.svg';
import footerpaddingright from './footerpaddingright.svg';
import './Footer.scss';

const Footer = () => (
    <div id="Footer-container">
        <InfiniteScrollImageContainer
            mainImg={footerimage}
            leftImg={footerpaddingleft}
            rightImg={footerpaddingright}
            footer
        />
        <Container>
            <Row id="Footer-paddingTopRow" className="Footer-row" />
            <Row id="Footer-contentRow" className="Footer-row">
                <Col xs="4" md="3">
                    <div className="Footer-header">Product</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col xs="4" md="3">
                    <div className="Footer-header">Company</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
                <Col xs="4" md="3">
                    <div className="Footer-header">Learn</div>
                    <div className="Footer-content">
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                        <div>Footer Text</div>
                    </div>
                </Col>
            </Row>
            <Row id="Footer-copyrightRow" className="Footer-row">
                <Col md="9">
                    © 2018, Wick, Inc. All Rights Reserved.
                </Col>
            </Row>
            <Row id="Footer-paddingBottomRow" className="Footer-row" />
        </Container>
    </div>
);

export default Footer;