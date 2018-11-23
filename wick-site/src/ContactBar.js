/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContactBar.js

    Row of links for external social media and contacts
*/

import React from 'react';
import {Row, Col} from 'reactstrap';
import Img from 'react-image';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import snapchat from './snapchat.jpg';
import email from './email.jpg';
import './ContactBar.scss';

const ContactBar = () => (
    <Row className="ContactBar-containerRow ContactBar-row">
        <Col xs="2" lg="1">
            <Img src={facebook} className="ContactBar-icon" />
        </Col>
        <Col xs="2" lg="1">
            <Img src={twitter} className="ContactBar-icon" />
        </Col>
        <Col xs="2" lg="1">
            <Img src={instagram} className="ContactBar-icon" />
        </Col>
        <Col xs="2" lg="1">
            <Img src={snapchat} className="ContactBar-icon" />
        </Col>
        <Col xs="2" lg="1">
            <Img src={email} className="ContactBar-icon" />
        </Col>
    </Row>
);

export default ContactBar;