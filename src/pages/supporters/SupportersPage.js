/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportersPage.js

    Top-Level Content for the Wick Supporters page
*/

import React from 'react';

import { Container } from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import { WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import { WickSubTitle } from '../../pattern_library/title/WickTitles.js';
import SupportWick from '../../page_components/support/SupportWick.js';
import SupporterBrands from '../../page_components/supporter_brands/SupporterBrands.js';
//import SupportersContainer from '../../page_components/supporters/SupportersContainer.js';

const SupportersPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="Our Supporters"
            text="The Wick Editor is supported by generous grants from organizations which support our mission, as well as donations from the community."
            includeUnderline
            includePadding
        >
            <SupporterBrands />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            text="You can become a supporter too!"
            size="large"
            includePadding
        >
            <SupportWick />
        </ContentSection>
        <WickSmallSpacer />
        {/* THIS SECTION COMMENTED OUT FOR INITIAL RELEASE UNTIL MORE SUPPORTERS ARE ACQUIRED
        <SupportersContainer />
        */}
        <WickSubTitle>Thank you!</WickSubTitle>
    </Container>
);

export default SupportersPage;
