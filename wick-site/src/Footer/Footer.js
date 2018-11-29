/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Footer.js

    Footer information for website
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import InfiniteScrollImageContainer from '../InfiniteScrollImage/InfiniteScrollImageContainer.js';
import footerimage from '../Images/Footer/footerimage.svg';
import footerpaddingleft from '../Images/Footer/footerpaddingleft.svg';
import footerpaddingright from '../Images/Footer/footerpaddingright.svg';
import '../scss_styles/Footer.scss';

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
            <Row id="Footer-copyrightRow" className="Footer-row">
                <Col md="9">
                    © 2018, Wicklets, LLC. All Rights Reserved.
                </Col>
            </Row>
            <Row id="Footer-paddingBottomRow" className="Footer-row" />
        </Container>
    </div>
);

export default Footer;