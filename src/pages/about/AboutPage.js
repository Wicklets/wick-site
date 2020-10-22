/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPage.js

    Top-Level Content for the Wick About page
*/

import React, { Fragment } from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

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

const libraries = (
    <Fragment>
        <InlineLink text="Paper.js" link="http://paperjs.org/" />, <InlineLink text="React" link="https://reactjs.org/" />, <InlineLink text="Croquis" link="https://github.com/disjukr/croquis.js/tree/master" />, <InlineLink text="Potrace" link="https://github.com/oov/potrace" />, <InlineLink text="ffmpeg" link="https://ffmpeg.org/" />, <InlineLink text="videoconverter.js" link="https://github.com/bgrins/videoconverter.js" />, <InlineLink text="howler" link="https://howlerjs.com/" />, <InlineLink text="Tween.js" link="https://github.com/tweenjs/tween.js" />, <InlineLink text="Gif.js" link="https://github.com/jnordberg/gif.js" />, <InlineLink text="and so many more..." link="https://github.com/Wicklets/wick-editor/blob/master/CREDITS.md" />. Without these libraries the Wick Editor, and so much more, would not be possible.
    </Fragment>
);

const contact = (
    <Fragment>
        Shoot us a <InlineLink text="message" link="mailto:contact@wickeditor.com" />, join the wick editor community with a <InlineLink text="YouTube subscription" link="https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg" /> or become a patron on <InlineLink text="Patreon" link="https://www.patreon.com/WickEditor" />!
    </Fragment>
);

const AboutPage = () => (
    <Container className="fadeIn animated">
        <Helmet>
            <title>The Wick Editor - About</title>
            <meta name="description" content="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between." />
        </Helmet>
        <ContentSection
            title="What is Wick Editor?"
            text="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects on the web."
            includeUnderline
        >
            <ResponsiveImage id="AboutPage-editor" image={editorpreview} xs="12" lg="9" />
        </ContentSection>
        <ContentSection
            text="The Wick Editor is a hybrid animation tool and coding environment, inspired by similar tools such as HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web."
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
            title="and these libraries"
            text={libraries}
            titleWeight="semibold"
            includeUnderline
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
