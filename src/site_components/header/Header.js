/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Component to render header image and content for each page
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';

import InfiniteScrollImageContainer from '../../InfiniteScrollImage/InfiniteScrollImageContainer.js';
import wickworld from '../../Images/Header/wickworld.svg';
import mountainpadding from '../../Images/Header/mountainpadding.svg';
import forestpadding from '../../Images/Header/forestpadding.svg';

import '../../scss_styles/Header.scss';

const Header = ({title, showButton, showSubtitle, buttonLabel, onClick, children}) => (
    <Container>
        <InfiniteScrollImageContainer
            mainImg={wickworld}
            leftImg={mountainpadding}
            rightImg={forestpadding}
        />
        <Row id="Header-titleRow" className="fadeIn animated Wick-row">{title}</Row>
        <Row id="Header-buttonRow" className="fadeIn animated Wick-row">
            <Col xs="7" sm="5" md="4" lg="3" xl="2">
                {showButton ? (
                    <Button
                        color="primary"
                        size="lg"
                        block
                        onClick={onClick}
                    >
                        {buttonLabel}
                    </Button>
                ) : (
                    <div id="Header-buttonSpacer" />
                )}
            </Col>
        </Row>
        {showSubtitle && (
            <Row id="Header-subtitleRow" className="fadeIn animated Wick-row">
                <Col sm="9" lg="6">
                    {children}
                </Col>
            </Row>
        )}
    </Container>
);

export default Header;