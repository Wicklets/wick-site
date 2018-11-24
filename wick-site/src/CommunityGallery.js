/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityGallery.js

    Grid of user-created content
*/

import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import './CommunityGallery.scss';

const CommunityGallery = () => (
    <Fragment>
        <Row>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test2"></div></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12">
                        <div className="CommunityGallery-test2"></div>
                    </Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-testText2"><div>something</div></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-testText1"><div>Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your.</div></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test2"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6">
                        <div className="CommunityGallery-test2"></div>
                    </Col>
                    <Col sm="6">
                        <div className="CommunityGallery-test2"></div>
                    </Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12">
                        <div className="CommunityGallery-test2"></div>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test2"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test"></div></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test"></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><div className="CommunityGallery-test2"></div></Col>
                    <Col sm="6"><div className="CommunityGallery-test2"></div></Col>
                </Row>
            </Col>
        </Row>
    </Fragment>
);

export default CommunityGallery;