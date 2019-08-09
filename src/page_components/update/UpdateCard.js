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
                    <CardTitle className="UpdateCard-version">Version 1.13 is up!</CardTitle>
                    <CardSubtitle className="UpdateCard-text">
                        Take a look at version 1.13 which includes sound and quality of life improvements. You can test it out at <InlineLink text="editor.wickeditor.com" link="http://editor.wickeditor.com" />!
                    </CardSubtitle>
                    <div className="UpdateCard-button">
                        <WickButton text="try it" size="sm" type="body" onClick={() => window.open("http://editor.wickeditor.com")} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default UpdateCard;