/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React, { Fragment } from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import ExampleCardDeckContainer from '../../page_components/examples/ExampleCardDeckContainer.js';
import TutorialCardDeckContainer from '../../page_components/tutorials/TutorialCardDeckContainer.js';
import NewsCardDeckContainer from '../../page_components/news/NewsCardDeckContainer.js';
import UpdateCard from '../../page_components/update/UpdateCard.js';
import ContentSection from '../../page_components/content_section/ContentSection.js';
import { WickLargeSpacer, WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import Embed from '../../pattern_library/embed/WickEmbed.js';
import {WickTitle} from '../../pattern_library/title/WickTitles.js';
import SocialMedia from '../../page_components/social_media/SocialMedia.js';
import SupportWick from '../../page_components/support/SupportWick.js';
import InlineLink from '../../pattern_library/inline_link/WickInlineLink.js';

import tutorial from '../../Images/Icons/tutorial.svg';
import example from '../../Images/Icons/example.svg';
import updates from '../../Images/Icons/updates.svg';
import support from '../../Images/Icons/support.svg';

// Embed the termly cookie banner.
(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://app.termly.io/embed.min.js';
    s.id = '6f456f6b-6324-4fed-99b7-b603532d30a5';
    s.setAttribute("data-name", "termly-embed-banner");
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();

const HomePage = () => (
    <Container className="fadeIn animated">
        <Helmet>
            <title>The Wick Editor</title>
            <meta name="description" content="The Wick Editor: Make games, animations, and everything in-between." />
        </Helmet>
        <Embed url="https://youtube.com/embed/pAsrXT8KIrI" ratio="16:9" />
        <WickSmallSpacer />
        <WickTitle>our latest</WickTitle>
        <ContentSection
            title="Tutorials"
            text={<Fragment>Here are a few tutorials to help you get started with the new Wick Editor 1.0. Have an idea for a tutorial, or want to submit your own? Post it on the <InlineLink text="Wick Editor forums!" link="https://forum.wickeditor.com/" /></Fragment>}
            size="small"
            includeUnderline
            icon={tutorial}
            iconMobile
        >
            <TutorialCardDeckContainer
                text={"watch more"}
                routerLink
            />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="Examples"
            text={<Fragment>Check out a few example projects made in Wick Editor 1.0! Have an idea for an example, or want to submit your own? Post it on the <InlineLink text="Wick Editor forums!" link="https://forum.wickeditor.com/" /></Fragment>}
            size="small"
            includeUnderline
            icon={example}
            iconMobile
        >
            <ExampleCardDeckContainer
                text={"see more"}
                routerLink
            />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="Updates"
            size="small"
            includeUnderline
            icon={updates}
            iconMobile
        >
            <UpdateCard />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="News"
            size="small"
            includeUnderline
        >
            <NewsCardDeckContainer />
        </ContentSection>
        <WickLargeSpacer />
        <ContentSection
            title="support wick editor!"
            text="Support Wick Editor development with a YouTube subscription or Patreon membership!"
            size="large"
            includePadding
            includeTitlePadding
            icon={support}
            iconMobile
        >
            <SupportWick />
        </ContentSection>
        <SocialMedia />
    </Container>
);

export default HomePage;
