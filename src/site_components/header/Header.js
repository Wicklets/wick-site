/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Component to render header image and content for each page
*/

import React, { Fragment } from 'react';
import Img from 'react-image';

import {Container, Row, Col} from 'reactstrap';

import WickButton from '../../pattern_library/button/WickButton.js';

import wickworld from '../../Images/Header/wickworldwide2.svg';

import '../../scss_styles/Header.scss';

const Header = ({title, tagline, subtitle, buttonLabel, onClick}) => (
    <Fragment>
        <div id="Header-imageContainer">
            <div id="Header-image">
                <Img src={wickworld} />
            </div>
        </div>
        <Container className="fadeIn animated">
            <div id="Header-titleRow">{title}</div>
            {(tagline ? (
                <div id="Header-tagline">{tagline}</div>
            ) : (
                <div id="Header-taglineSpacer" />
            ))}
            <Row id="Header-buttonRow" className="Wick-row">
                <Col xs="auto">
                    {buttonLabel ? (
                        <WickButton text={buttonLabel} size="lg" block type="header" onClick={onClick} />
                    ) : (
                        <div id="Header-buttonSpacer" />
                    )}
                </Col>
            </Row>
            {subtitle && (
                <Row id="Header-subtitleRow" className="Wick-row">
                    <Col sm="9" lg="6">
                        {subtitle}
                    </Col>
                </Row>
            )}
        </Container>
    </Fragment>
);

export default Header;