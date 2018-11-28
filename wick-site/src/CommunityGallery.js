/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityGallery.js

    Grid of user-created content
*/

import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import Img from 'react-image';
import community1 from './community1.png';
import community2 from './community2.png';
import community3 from './community3.png';
import community4 from './community4.png';
import community5 from './community5.png';
import community6 from './community6.png';
import './CommunityGallery.scss';

const CommunityGallery = () => (
    <Fragment>
        <Row>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community2} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community3} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community4} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community2} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12">
                        <Img src={community2} className="CommunityGallery-image" />
                    </Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community2} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><div className="CommunityGallery-testText2"><div>Wick Worlds</div></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community4} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community2} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><div className="CommunityGallery-testText1"><div>The possibilities are endless! Here's what people around the world are creating with wick editor.</div></div></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community2} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community2} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6">
                        <Img src={community5} className="CommunityGallery-image" />
                    </Col>
                    <Col xs="6">
                        <Img src={community6} className="CommunityGallery-image" />
                    </Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12">
                        <Img src={community2} className="CommunityGallery-image" />
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community1} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community4} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community3} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="12"><Img src={community4} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community1} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community2} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community2} className="CommunityGallery-image" /></Col>
                </Row>
                <Row className="CommunityGallery-galleryRow">
                    <Col xs="6"><Img src={community6} className="CommunityGallery-image" /></Col>
                    <Col xs="6"><Img src={community5} className="CommunityGallery-image" /></Col>
                </Row>
            </Col>
        </Row>
    </Fragment>
);

export default CommunityGallery;