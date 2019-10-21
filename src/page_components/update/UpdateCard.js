/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    UpdateCard.js

    Update Info Tab to be displayed on the homepage
*/

import React from 'react';

import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Row, Col} from 'reactstrap';

import WickButton from '../../pattern_library/button/WickButton.js';
import InlineLink from '../../pattern_library/inline_link/WickInlineLink.js';

import '../../scss_styles/UpdateCard.scss';

const UpdateCard = () => (
    <Row className="Wick-row">
        <Col md="9">
            <Card className="UpdateCard-container">
                <CardBody>
                    <CardTitle className="UpdateCard-version">Version 1.15!</CardTitle>
                    <CardSubtitle className="UpdateCard-text">
                        Take a look at version 1.15 which has a brand new, redesigned timeline, a new button and clip workflow, and a hotkeys menu! Try it now at <InlineLink text="test.wickeditor.com" link="http://test.wickeditor.com" />!
                    </CardSubtitle>
                    <div className="UpdateCard-button">
                        <WickButton text="try it" size="sm" type="body" onClick={() => window.open("http://test.wickeditor.com")} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default UpdateCard;
