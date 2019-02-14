/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Component to render header image and content for each page
*/

import React, { Fragment } from 'react';

import {Container, Row, Col} from 'reactstrap';

import InfiniteScrollImageContainer from '../../InfiniteScrollImage/InfiniteScrollImageContainer.js';
import WickButton from '../../pattern_library/button/WickButton.js';

import wickworld from '../../Images/Header/wickworld.svg';
import mountainpadding from '../../Images/Header/mountainpadding.svg';
import forestpadding from '../../Images/Header/forestpadding.svg';

import '../../scss_styles/Header.scss';

const Header = ({title, subtitle, buttonLabel, onClick}) => (
    <Fragment>
        <InfiniteScrollImageContainer
                mainImg={wickworld}
                leftImg={mountainpadding}
                rightImg={forestpadding}
        />
        <Container className="fadeIn animated">
            <div id="Header-titleRow">{title}</div>
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