/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickEmbed.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import ResponsiveEmbed from 'react-responsive-embed';

import '../../scss_styles/WickEmbed.scss';

const WickEmbed = ({url, ratio}) => (
    <Row className="Wick-row">
        <Col xs="12" md="9" lg="8" xl="7">
            <div className="WickEmbed-container">
                <ResponsiveEmbed src={url} ratio={ratio}/>
            </div>
        </Col>
    </Row>
);

export default WickEmbed;