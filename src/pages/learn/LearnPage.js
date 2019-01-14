/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPage.js

    Top-Level Content for the Wick Learn page
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import LearnCardContainer from '../../LearnPage/LearnCardContainer.js';
import { WickSmallSpacer, WickLargeSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';

const LearnPage = ({tutorials, examples}) => (
    <Container className="fadeIn animated">
        <ContentSection
            title="explore tutorials"
            text="Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
            includePadding
        />
        <WickSmallSpacer />
        <ContentSection
            title="explore examples"
            text="Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
            includePadding
        />
        <WickLargeSpacer />
        <ExternalContacts />
    </Container>
);

export default LearnPage;