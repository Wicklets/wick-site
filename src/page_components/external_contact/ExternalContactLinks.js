/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExternalContactLinks.js

    Component for Wick Links to Email and Forum (External Contacts)
*/

import React from 'react';

import {Row, Col} from 'reactstrap';

import ContentLinkContainer from '../../pattern_library/content_link/ContentLinkContainer.js';

const ExternalContactLinks = ({forum, email}) => (
    <Row className="ExternalContactLinks-container Wick-row">
        <Col sm="5" md="4" lg="3">
            <ContentLinkContainer {...forum} />
        </Col>
        <Col sm="1" />
        <Col sm="5" md="4" lg="3">
            <ContentLinkContainer {...email} />
        </Col>
    </Row>
);

export default ExternalContactLinks;