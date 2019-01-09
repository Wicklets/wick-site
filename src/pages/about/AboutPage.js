/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPage.js

    Top-Level Content for the Wick About page
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import Img from 'react-image';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import CreatorsContainer from '../../page_components/creators/CreatorsContainer.js';
import {WickLargeSpacer} from '../../pattern_library/spacers/WickSpacers.js';
import SocialMedia from '../../page_components/social_media/SocialMedia.js';

import editorpreview from '../../Images/Misc/editorpreview.svg';
import cannon from '../../Images/Misc/cannon.svg';

import '../../scss_styles/AboutPage.scss';

const AboutPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="What is Wick Editor?"
            text="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects."
            includeUnderline
        >
            <Row id="AboutPage-editorPreviewRow" className="Wick-row">
                <Col xs="12" lg="9">
                    <Img src={editorpreview} id="AboutPage-editorPreviewImage" />
                </Col>
            </Row>
        </ContentSection>
        <ContentSection
            text="The Wick Editor is a hybrid of an animation tool and a coding environment, heavily inspired by similar tools such as Flash, HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web. You can read more about the creation of the Wick Editor here."
        />
        <WickLargeSpacer />
        <ContentSection
            title="Who is Wick Editor?"
            text="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects."
            includeUnderline
        >
            <CreatorsContainer />
        </ContentSection>
        <WickLargeSpacer />
        <Row id="AboutPage-cannonImageRow" className="Wick-row">
            <Img src={cannon} />
        </Row>
        <ContentSection
            title="special thanks to"
            text="Golan Levin, Tom Hughes, Sarah Guthals, Nina Barbuto (and everyone at Assemble including Jess Gold and Lieu Wolfe)"
            includeUnderline
        />
        <WickLargeSpacer />
        <ContentSection
            title="contact us!"
            text="Shoot us a message, join the wick editor community with a YouTube membership or subscribe on Patreon!"
            includeUnderline
        />
        <WickLargeSpacer />
        <WickLargeSpacer />
        <SocialMedia />
    </Container>
);

export default AboutPage;