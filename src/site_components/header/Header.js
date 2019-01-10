/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Component to render header image and content for each page
*/

import React, { Fragment } from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';

import InfiniteScrollImageContainer from '../../InfiniteScrollImage/InfiniteScrollImageContainer.js';
import wickworld from '../../Images/Header/wickworld.svg';
import mountainpadding from '../../Images/Header/mountainpadding.svg';
import forestpadding from '../../Images/Header/forestpadding.svg';

import '../../scss_styles/Header.scss';

const Header = ({title, showButton, showSubtitle, buttonLabel, onClick, children}) => (
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
                <Row id="Header-subtitleRow" className="Wick-row">
                    <Col sm="9" lg="6">
                        {children}
                    </Col>
                </Row>
            )}
        </Container>
    </Fragment>
);

export default Header;