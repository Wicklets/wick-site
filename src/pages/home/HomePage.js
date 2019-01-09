/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';

import ExampleCardDeckContainer from '../../page_components/examples/ExampleCardDeckContainer.js';
import TutorialCardDeckContainer from '../../page_components/tutorials/TutorialCardDeckContainer.js';
import NewsCardDeckContainer from '../../page_components/news/NewsCardDeckContainer.js';
import UpdateCard from '../../page_components/update/UpdateCard.js';
import ContentSection from '../../page_components/content_section/ContentSection.js';
import {WickLargeSpacer, WickSmallSpacer} from '../../pattern_library/spacers/WickSpacers.js';
import Embed from '../../pattern_library/embed/WickEmbed.js';
import Title from '../../pattern_library/title/WickTitle.js';
import SocialMedia from '../../page_components/social_media/SocialMedia.js';

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
            <Row className="Wick-row">
                <Col xs="6" sm="4" md="3" lg="2">
                    <Button
                        color="success"
                        block
                        onClick={() => window.open("http://wickeditor.com/#tutorials")}
                    >
                        watch more
                    </Button>
                </Col>
            </Row>
            <WickSmallSpacer />
        </ContentSection>
        <ContentSection
            title="examples"
            text="Check out some examples to help you get started using the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            size="small"
            includeUnderline
        >
            <ExampleCardDeckContainer />
            <Row className="Wick-row">
                <Col xs="6" sm="4" md="3" lg="2">
                    <Button
                        color="success"
                        block
                        onClick={() => window.open("http://wickeditor.com/#examples")}
                    >
                        see more
                    </Button>
                </Col>
            </Row>
            <WickSmallSpacer />
        </ContentSection>
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
            <Row className="Wick-row">
                <Col sm="9" md="4" lg="3">
                    <Button
                        color="info"
                        outline
                        block
                        onClick={() => window.open("https://www.patreon.com/WickEditor")}
                    >
                        Become a Patron
                    </Button>
                </Col>
                <Col sm="9" md="4" lg="3">
                    <Button
                        color="info"
                        outline
                        block
                        onClick={() => window.open("https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg")}
                    >
                        Subscribe on Youtube
                    </Button>
                </Col>
            </Row>
        </ContentSection>
        <SocialMedia />
    </Container>
);

export default HomePage;