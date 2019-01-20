/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityGallery.js

    Grid of user-created content
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import Img from 'react-image';

import AspectImage from '../../pattern_library/images/WickAspectImage.js';

import community1 from '../../Images/Projects/community1.png';

const CommunityGallery = () => (
    <Row className="Wick-row">
        <Col sm="9" md="12" lg="9">
            <Row>
                <Col xs="8">
                    <Row>
                        <Col xs="3">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                        <Col xs="3">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                    </Row>
                </Col>
                <Col xs="4">
                    <Row>
                        <Col xs="12">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                    <Row>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                    </Row>
                </Col>
                <Col xs="4">
                    <AspectImage image={community1} heightPercent="100" />
                </Col>
                <Col xs="4">
                    <Row>
                        <Col xs="12">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                    <Row>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <AspectImage image={community1} heightPercent="100" />
                        </Col>
                    </Row>
                </Col>
                <Col xs="8">
                    <Row>
                        <Col xs="12">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                        <Col xs="6">
                            <AspectImage image={community1} heightPercent="50" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default CommunityGallery;