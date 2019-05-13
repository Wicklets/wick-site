/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPage.js

    Top-Level Content for the Wick Learn page
*/

import React from 'react';

import { Container } from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import { WickSmallSpacer, WickLargeSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';
import ExampleCardBlockContainer from '../../page_components/examples/ExampleCardBlockContainer.js';
import ExampleCardDeckContainer from '../../page_components/examples/ExampleCardDeckContainer.js';
import TutorialCardBlockContainer from '../../page_components/tutorials/TutorialCardBlockContainer.js';
import TutorialCardDeckContainer from '../../page_components/tutorials/TutorialCardDeckContainer.js';

import tutorial from '../../Images/Icons/tutorial.svg';
import example from '../../Images/Icons/example.svg';

const LearnPage = ({shouldCollapseCards, areTutorialsExpanded, expandTutorials, areExamplesExpanded, expandExamples}) => (
    <Container className="fadeIn animated">
        <ContentSection
            title="Explore Tutorials"
            text="Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
            includePadding
            icon={tutorial}
            iconMobile
        >
            {(shouldCollapseCards && !areTutorialsExpanded ?
                <TutorialCardDeckContainer
                    text={"see more"}
                    onClick={expandTutorials}
                />
            :
                <TutorialCardBlockContainer />
            )}
        </ContentSection>
        <WickSmallSpacer />
        <ContentSection
            title="Explore Examples"
            text="Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
            includePadding
            icon={example}
            iconMobile
        >
            {(shouldCollapseCards && !areExamplesExpanded ?
                <ExampleCardDeckContainer
                    text={"see more"}
                    onClick={expandExamples}
                />
            :
                <ExampleCardBlockContainer />
            )}
        </ContentSection>
        <WickLargeSpacer />
        <ExternalContacts />
        <WickSmallSpacer />
    </Container>
);

export default LearnPage;