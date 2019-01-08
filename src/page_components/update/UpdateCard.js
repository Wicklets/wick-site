/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    UpdateCard.js

    Update Info Tab to be displayed on the homepage
*/

import React from 'react';

import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';

import '../../scss_styles/UpdateCard.scss';

const UpdateCard = () => (
    <Row className="Wick-row">
        <Col md="9">
            <Card className="UpdateCard-container">
                <CardBody>
                    <CardTitle className="UpdateCard-version">update 0.15.2</CardTitle>
                    <CardSubtitle className="UpdateCard-text">It's mean. It's lean. It makes animations and games. Try it out!</CardSubtitle>
                    <Button
                        className="UpdateCard-button"
                        outline
                        color="success"
                        size="sm"
                        onClick={() => window.open("http://wickeditor.com/wick-editor/")}
                    >
                        try it
                    </Button>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default UpdateCard;