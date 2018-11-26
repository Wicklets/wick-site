/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPage.js

    Top-Level Content for the Wick Gallery page
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SectionContent from './SectionContent.js';
import CommunityGallery from './CommunityGallery.js';
import './CommunityPage.scss';

const CommunityPage = () => (
    <Container>
        <SectionContent title="wick editor forum" includeUnderline>
            Forum Description. Something here something here something heresomething heresomething heresomething heresomething heresomething here.
        </SectionContent>
        <Row className="CommunityPage-spacerRow" />
        <SectionContent title="creators" includeUnderline>
            Check out what people are making!
        </SectionContent>
        <Row id="CommunityPage-galleryContainer" className="CommunityPage-row">
            <Col sm="9" md="12" lg="9">
                <CommunityGallery />
            </Col>
        </Row>
    </Container>
);

export default CommunityPage;