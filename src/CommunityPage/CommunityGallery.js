/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityGallery.js

    Grid of user-created content
*/

import React from 'react';

import {Row, Col} from 'reactstrap';
import Img from 'react-image';

import community1 from '../Images/Projects/community1.png';
import community2 from '../Images/Projects/community2.png';
import community3 from '../Images/Projects/community3.png';
import community4 from '../Images/Projects/community4.png';
import community5 from '../Images/Projects/community5.png';
import community6 from '../Images/Projects/community6.png';

import '../scss_styles/CommunityGallery.scss';

const CommunityGallery = () => (
    <Row className="Wick-row">
        <Col sm="9" md="12" lg="9">
                        <Row>
                            <Col xs="8">
                                <Row>
                                    <Col xs="3">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                    <Col xs="3">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="4">
                                <Row>
                                    <Col xs="12">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs="4">
                                <Row>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="4">
                                <div className="CommunityGallery-test11" />
                            </Col>
                            <Col xs="4">
                                <Row>
                                    <Col xs="12">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs="4">
                                <Row>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="CommunityGallery-test11" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="8">
                                <Row>
                                    <Col xs="12">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                    <Col xs="6">
                                        <div className="CommunityGallery-test21" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
        </Col>
    </Row>
);

export default CommunityGallery;