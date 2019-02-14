/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportWick.js

    Buttons for users to support wick
*/

import React from 'react';

import {Row, Col} from 'reactstrap';

import WickButton from '../../pattern_library/button/WickButton.js';

const SupportWick = () => (
    <Row className="Wick-row">
        <Col sm="9" md="4" lg="3">
            <WickButton
                text="Become a Patron"
                size="lg"
                block
                type="body"
                onClick={() => window.open("https://www.patreon.com/WickEditor")}
            />
        </Col>
        <Col sm="9" md="4" lg="3">
            <WickButton
                text="Subscribe on Youtube"
                size="lg"
                type="body"
                block
                onClick={() => window.open("https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg")}
            />
        </Col>
    </Row>
);

export default SupportWick;