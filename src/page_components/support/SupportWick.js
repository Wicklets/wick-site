/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportWick.js

    Buttons for users to support wick
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';

const SupportWick = () => (
    <Row className="Wick-row">
        <Col sm="9" md="4" lg="3">
            <Button
                color="info"
                outline
                block
                onClick={() => window.open("https://www.patreon.com/WickEditor")}
            >
                Become a Patron
            </Button>
        </Col>
        <Col sm="9" md="4" lg="3">
            <Button
                color="info"
                outline
                block
                onClick={() => window.open("https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg")}
            >
                Subscribe on Youtube
            </Button>
        </Col>
    </Row>
);

export default SupportWick;