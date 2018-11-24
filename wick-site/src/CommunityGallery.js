/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityGallery.js

    Grid of user-created content
*/

import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import Img from 'react-image';
import coreyemery from './CoreyEmery.png';
import coreyPGSS from './CoreyEmeryPGSS.png';
import booth from './booth.jpg';
import './CommunityGallery.scss';

const CommunityGallery = () => (
    <Fragment>
        <Row>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={booth} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={booth} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12">
                        <Img src={coreyemery} className="CommunityGallery-image" />
                    </Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-testText2"><div>something</div></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={booth} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><div className="CommunityGallery-testText1"><div>Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your.</div></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6">
                        <Img src={coreyPGSS} className="CommunityGallery-image" />
                    </Col>
                    <Col sm="6">
                        <Img src={coreyPGSS} className="CommunityGallery-image" />
                    </Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12">
                        <Img src={coreyemery} className="CommunityGallery-image" />
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={booth} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={booth} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="12"><Img src={booth} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col sm="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyemery} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col sm="6"><Img src={coreyPGSS} className="CommunityGallery-image" /></Col>
                    <Col sm="6"><Img src={coreyPGSS} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
        </Row>
    </Fragment>
);

export default CommunityGallery;