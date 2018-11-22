/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PageTitle.js

    Component to render title and subtitle bar for each page
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import wickworld from './wickworld.svg';
import './PageTitle.scss';

const PageTitle = ({title, showButton, buttonLabel, children}) => (
    <Container>
        <img src={wickworld} className="PageTitle-wickWorld" alt="Wick World" />
        <Row id="PageTitle-titleRow" className="PageTitle-row">{title}</Row>
        <Row id="PageTitle-buttonRow" className="PageTitle-row">
            <Col xs="7" sm="5" md="4" lg="3" xl="2">
                {showButton ? (
                    <Button color="secondary" size="lg" block>{buttonLabel}</Button>
                ) : (
                    <div className="PageTitle-buttonSpacer" />
                )}
            </Col>
        </Row>
        <Row id="PageTitle-subtitleRow" className="PageTitle-row">
            <Col sm="9" lg="6">
                {children}
            </Col>
        </Row>
    </Container>
);

export default PageTitle;