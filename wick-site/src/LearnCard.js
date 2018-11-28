/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnCard.js

    Component to display examples/tutorials on the learn page
*/

import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import {Card, CardBody, CardTitle} from 'reactstrap';
import {Button} from 'reactstrap';
import Img from 'react-image';
import ResponsiveEmbed from 'react-responsive-embed';
import './LearnCard.scss';

const LearnCard = ({title, body, image, link, launchEditor, useImage, useButtonRow}) => (
    <Fragment>
        <Row className="LearnCard-row">
            <Col sm="12">
                <Card>
                    <CardBody>
                        <CardTitle className="LearnCard-title">
                            {title}
                        </CardTitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row className="LearnCard-contentRow LearnCard-row">
            <Col sm="6">
            <div className="LearnCard-contentContainer">
                <div>{body}</div>
                {!useButtonRow && (
                    <Button
                        className="LearnCard-editorButton"
                        block
                        size="lg"
                        onClick={launchEditor}
                    >
                        Try it Yourself!
                    </Button>
                )}
                </div>
            </Col>
            <Col sm="6">
                {(useImage ?
                    <Img src={image} className="LearnCard-image" /> :
                    <ResponsiveEmbed src={link} ratio="16:9" />
                )}
            </Col>
        </Row>
        {useButtonRow && (
            <Row className="LearnCard-editorButtonRow">
                <Col xs="12">
                    <Button
                        block
                        onClick={launchEditor}
                    >
                        Try it Yourself!
                    </Button>
                </Col>
            </Row>
        )}
    </Fragment>
);

export default LearnCard;