/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CreatorCard.js

    Component for the Wick Creator Highlight Card
*/

import React from 'react';
import Img from 'react-image';

import { Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import '../../scss_styles/CreatorCard.scss';

const CreatorCard = ({projectName, userImage, projectImage, description}) => (
    <Row className="Wick-row">
        <Col sm="12" md="9" lg="7" xl="6">
            <Card className="CreatorCard-container">
                <div className="CreatorCard-imageContainer">
                    <div className="CreatorCard-projectImageContainer">
                        <Img className="CreatorCard-projectImage" src={projectImage} />
                    </div>
                </div>
                <CardBody className="CreatorCard-content">
                    <Img className="CreatorCard-creatorImage" src={userImage} />
                    <CardTitle className="CreatorCard-username">{projectName}</CardTitle>
                    <CardText className="CreatorCard-text">{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default CreatorCard;