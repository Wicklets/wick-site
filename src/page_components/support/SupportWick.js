/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportWick.js

    Buttons for users to support wick
*/

import React from 'react';

import {Row, Col} from 'reactstrap';

import WickButton from '../../pattern_library/button/WickButton.js';

import '../../scss_styles/SupportWick.scss';

const SupportWick = () => (
    <Row className="Wick-row">
        <Col className="SupportWick-button" sm="9" md="4" lg="3">
            <WickButton
                text="Become a Patron"
                size="lg"
                type="body"
                block
                thicc
                onClick={() => window.open("https://www.patreon.com/WickEditor")}
            />
        </Col>
        <Col className="SupportWick-button" sm="9" md="4" lg="3">
            <WickButton
                text="Support on Github"
                size="lg"
                type="body"
                block
                thicc
                onClick={() => window.open("https://github.com/sponsors/Wicklets")}
            />
        </Col>
    </Row>
);

export default SupportWick;