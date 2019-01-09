/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPage.js

    Top-Level Content for the Wick Gallery page
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import CommunityGalleryContainer from '../../CommunityPage/CommunityGalleryContainer.js';
import {WickSmallSpacer} from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';

import '../../scss_styles/CommunityPage.scss';

const CommunityPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="wick editor forum"
            text="See what all the buzz is about and chat with fellow wick users for tips, tricks, and inspiration on your next project."
            includeUnderline
        />

        <WickSmallSpacer />

        <ContentSection
            title="creators"
            text="Check out what people are making!"
            includeUnderline
        >
            <Row id="CommunityPage-galleryContainer" className="Wick-row">
                <Col sm="9" md="12" lg="9">
                    <CommunityGalleryContainer />
                </Col>
            </Row>
        </ContentSection>
        <WickSmallSpacer />
        <ExternalContacts />
        <WickSmallSpacer />
    </Container>
);

export default CommunityPage;