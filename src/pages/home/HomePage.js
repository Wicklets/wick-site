/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';

import { Container } from 'reactstrap';

import ExampleCardDeckContainer from '../../page_components/examples/ExampleCardDeckContainer.js';
import TutorialCardDeckContainer from '../../page_components/tutorials/TutorialCardDeckContainer.js';
import NewsCardDeckContainer from '../../page_components/news/NewsCardDeckContainer.js';
import UpdateCard from '../../page_components/update/UpdateCard.js';
import ContentSection from '../../page_components/content_section/ContentSection.js';
import { WickLargeSpacer, WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import Embed from '../../pattern_library/embed/WickEmbed.js';
import Title from '../../pattern_library/title/WickTitle.js';
import SocialMedia from '../../page_components/social_media/SocialMedia.js';
import SupportWick from '../../page_components/support/SupportWick.js';

const HomePage = () => (
    <Container className="fadeIn animated">
        <Embed url="https://www.youtube.com/embed/IpF8fMXN6To" ratio="16:9" />
        <WickSmallSpacer />
        <Title>our latest</Title>
        <ContentSection
            title="tutorials"
            text="Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
        >
            <TutorialCardDeckContainer />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="examples"
            text="Check out some examples to help you get started using the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
        >
            <ExampleCardDeckContainer />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="updates"
            size="small"
            includeUnderline
        >
            <UpdateCard />
            <NewsCardDeckContainer />
        </ContentSection>
        <WickLargeSpacer />
        <ContentSection
            title="Suport Wick Editor"
            text="Join the wick editor community with a YouTube membership or Patreon subscription!"
            size="large"
            includePadding
        >
            <SupportWick />
        </ContentSection>
        <SocialMedia />
    </Container>
);

export default HomePage;