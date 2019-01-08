/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickEmbed.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import ResponsiveEmbed from 'react-responsive-embed';

const WickEmbed = ({url, ratio}) => (
    <Row className="Wick-row">
        <Col xs="12" md="9" lg="8" xl="7">
            <ResponsiveEmbed src={url} ratio={ratio} />
        </Col>
    </Row>
);

export default WickEmbed;