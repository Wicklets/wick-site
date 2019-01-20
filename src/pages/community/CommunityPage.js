/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPage.js

    Top-Level Content for the Wick Gallery page
*/

import React from 'react';

import { Container } from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import CommunityGallery from '../../page_components/gallery/CommunityGallery.js';
import { WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';
import CreatorCard from '../../pattern_library/cards/CreatorCard.js';

const CommunityPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="wick editor community forum"
            text="See what all the buzz is about and chat with fellow wick users for tips, tricks, and inspiration on your next project."
            includeUnderline
        />
        <WickSmallSpacer />
        <ContentSection
            title="creators"
            text="Check out what people are making!"
            includeUnderline
            includePadding
        >
            <CreatorCard />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="project gallery"
            includeUnderline
            includePadding
        >
            <CommunityGallery />
        </ContentSection>
        <WickSmallSpacer />
        <ExternalContacts />
        <WickSmallSpacer />
    </Container>
);

export default CommunityPage;