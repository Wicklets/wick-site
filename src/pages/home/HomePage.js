/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';

import ExampleCardDeckContainer from '../../ContentComponents/PreviewCards/ExampleCardDeckContainer.js';
import TutorialCardDeckContainer from '../../ContentComponents/PreviewCards/TutorialCardDeckContainer.js';
import NewsCardDeckContainer from '../../ContentComponents/News/NewsCardDeckContainer.js';
import UpdateTab from '../../ContentComponents/VersionUpdate/UpdateTab.js';
import ContentSection from '../../page_components/content_section/ContentSection.js';
import {WickLargeSpacer, WickSmallSpacer} from '../../pattern_library/spacers/WickSpacers.js';
import Embed from '../../pattern_library/embed/WickEmbed.js';
import Title from '../../pattern_library/title/WickTitle.js';

import '../../scss_styles/HomePage.scss';

const HomePage = () => (
    <Container className="fadeIn animated">
        <Embed url="https://www.youtube.com/embed/IpF8fMXN6To" ratio="16:9" />

        <WickSmallSpacer />

        <Title>our latest</Title>

        <ContentSection
            title="tutorials"
            text="Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!"
            useSmallTitle
            includeUnderline
        >
            <Row className="HomePage-cardContainer Wick-row">
                <Col md="9">
                    <TutorialCardDeckContainer />
                </Col>
            </Row>
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
            useSmallTitle
            includeUnderline
        >
            <Row className="HomePage-cardContainer Wick-row">
                <Col md="9">
                    <ExampleCardDeckContainer />
                </Col>
            </Row>
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
            useSmallTitle
            includeUnderline
        >
            <Row className="Wick-row">
                <Col md="9">
                    <UpdateTab />
                </Col>
            </Row>
            <Row className="Wick-row">
                <Col md="9">
                    <NewsCardDeckContainer />
                </Col>
            </Row>
        </ContentSection>

        <WickLargeSpacer />

        <Row className="Wick-row">
            <Col id="HomePage-supportRow" sm="6">
                <div id="HomePage-supportWick">Support Wick Editor</div>
                <div id="HomePage-supportText">
                    Join the wick editor community with a YouTube membership or Patreon subscription!
                </div>
            </Col>
        </Row>
        <Row id="HomePage-subscribeRow" className="Wick-row">
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
    </Container>
);

export default HomePage;