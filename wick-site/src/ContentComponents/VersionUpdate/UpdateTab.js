/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    UpdateTab.js

    Update Info Tab to be displayed on the homepage
*/

import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Button} from 'reactstrap';
import '../../scss_styles/UpdateTab.scss';

const UpdateTab = () => (
    <Fragment>
        <Card id="UpdateTab-container">
            <CardBody>
                <CardTitle id="UpdateTab-version">update 0.15.2</CardTitle>
                <CardSubtitle id="UpdateTab-text">It's mean. It's lean. It makes animations and games. Try it out!</CardSubtitle>
                <Button
                    id="UpdateTab-button"
                    outline
                    color="success"
                    size="sm"
                    onClick={() => window.open("http://wickeditor.com/wick-editor/")}
                >
                    try it
                </Button>
            </CardBody>
        </Card>
    </Fragment>
);

export default UpdateTab;