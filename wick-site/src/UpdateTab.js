/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    UpdateTab.js

    Update Info Tab to be displayed on the homepage
*/

import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Button} from 'reactstrap';
import './UpdateTab.scss';

const UpdateTab = () => (
    <Fragment>
        <Card id="UpdateTab-container">
            <CardBody>
                <CardTitle id="UpdateTab-version">update 3.5</CardTitle>
                <CardSubtitle id="UpdateTab-text">Some exciting description here. Try it out!</CardSubtitle>
                <Button id="UpdateTab-button" outline color="secondary" size="sm">try it</Button>
            </CardBody>
        </Card>
    </Fragment>
);

export default UpdateTab;