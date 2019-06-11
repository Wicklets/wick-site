/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPage.js

    Top-Level Content for the Wick Gallery page
*/

import React from 'react';

import { Container } from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
//import CommunityGallery from '../../page_components/gallery/CommunityGallery.js';
import { WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';
//import WickCarouselContainer from '../../pattern_library/carousel/WickCarouselContainer.js';

const CommunityPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="Wick Editor Community Forum"
            text="Read about the latest updates, post your projects, make suggestions, and chat with other Wick Editor users on the Wick Editor Community Forum!"
            includeUnderline
        />
        <WickSmallSpacer />
        {/* THIS SECTION COMMENTED OUT FOR INITIAL RELEASE UNTIL DESIGN IS FINALIZED
        <ContentSection
            title="Community Projects"
            text="Check out what people are making!"
            includeUnderline
            includePadding
        >
            <WickCarouselContainer />
        </ContentSection>
        <WickSmallSpacer />
        */}
        {/* THIS SECTION COMMENTED OUT FOR INITIAL RELEASE UNTIL CONTENT CAN BE SOURCED
        <ContentSection
            title="Project Gallery"
            includeUnderline
            includePadding
        >
            <CommunityGallery />
        </ContentSection>
        <WickSmallSpacer />
        */}
        <ExternalContacts />
        <WickSmallSpacer />
    </Container>
);

export default CommunityPage;
