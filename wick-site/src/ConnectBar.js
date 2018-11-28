/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ConnectBar.js

    Row of links for external social media and contacts
*/

import React from 'react';
import {Row, Col} from 'reactstrap';
import Img from 'react-image';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import snapchat from './snapchat.png';
import email from './email.png';
import './ConnectBar.scss';

const ConnectBar = () => (
    <Row className="ConnectBar-containerRow ConnectBar-row">
        <Col xs="2" lg="1">
            <a href="https://www.facebook.com/wickeditor/" target="_blank" rel="noopener noreferrer">
                <Img src={facebook} className="ConnectBar-icon" />
            </a>
        </Col>
        <Col xs="2" lg="1">
            <a href="https://twitter.com/wickeditor" target="_blank" rel="noopener noreferrer">
                <Img src={twitter} className="ConnectBar-icon" />
            </a>
        </Col>
        <Col xs="2" lg="1">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Img src={instagram} className="ConnectBar-icon" />
            </a>
        </Col>
        <Col xs="2" lg="1">
            <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
                <Img src={snapchat} className="ConnectBar-icon" />
            </a>
        </Col>
        <Col xs="2" lg="1">
            <a href="mailto:contact@wickeditor.com">
                <Img src={email} className="ConnectBar-icon" />
            </a>
        </Col>
    </Row>
);

export default ConnectBar;