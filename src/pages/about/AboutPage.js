/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPage.js

    Top-Level Content for the Wick About page
*/

import React, { Fragment } from 'react';

import { Container } from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import CreatorsContainer from '../../page_components/creators/CreatorsContainer.js';
import { WickSmallSpacer, WickLargeSpacer, WickXLSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import SocialMedia from '../../page_components/social_media/SocialMedia.js';
import ResponsiveImage from '../../pattern_library/responsive_image/WickResponsiveImage.js';
import InlineLink from '../../pattern_library/inline_link/WickInlineLink.js';

import editorpreview from '../../Images/Misc/editorpreview.svg';
import cannon from '../../Images/Misc/cannon.svg';
import stars from '../../Images/Icons/stars.svg';

import '../../scss_styles/AboutPage.scss';

const thanks = (
    <Fragment>
        <InlineLink text="Golan Levin" link="http://flong.com/" />, <InlineLink text="Tom Hughes" link="http://studioforcreativeinquiry.org/peoples/thomas-hughes" />, <InlineLink text="Sarah Guthals" link="https://guthals.com/sarah" />, <InlineLink text="Nina Barbuto" link="https://remakelearning.org/person/barbuto-nina/" /> (and everyone at <InlineLink text="Assemble" link="http://assemblepgh.org/" /> including Jess Gold and Lieu Wolfe)
    </Fragment>
);

const contact = (
    <Fragment>
        Shoot us a <InlineLink text="message" link="mailto:contact@wickeditor.com" />, join the wick editor community with a <InlineLink text="YouTube subscription" link="https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg" /> or membership on <InlineLink text="Patreon" link="https://www.patreon.com/WickEditor" />!
    </Fragment>
);

const AboutPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="What is Wick Editor?"
            text="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects on the web."
            includeUnderline
        >
            <ResponsiveImage id="AboutPage-editor" image={editorpreview} xs="12" lg="9" />
        </ContentSection>
        <ContentSection
            text="The Wick Editor is a hybrid of an animation tool and a coding environment, heavily inspired by similar tools such as Flash, HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web."
        />
        <WickLargeSpacer />
        <ContentSection
            title="Who is Wick Editor?"
            text="The Wick Editor has been in development since 2016 with support, suggestions, and improvements provided by its entire community of users."
            includeUnderline
        >
            <CreatorsContainer />
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="special thanks to"
            text={thanks}
            titleWeight="semibold"
            includeUnderline
            icon={cannon}
        />
        <WickXLSpacer />
        <ContentSection
            title="contact us!"
            text={contact}
            titleWeight="semibold"
            includeUnderline
            icon={stars}
            iconOffset
        />
        <WickSmallSpacer />
        <SocialMedia />
    </Container>
);

export default AboutPage;