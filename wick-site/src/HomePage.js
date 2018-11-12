/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import PreviewCardDeckContainer from './PreviewCardDeckContainer.js';
import UpdateTab from './UpdateTab.js';
import NewsCard from './NewsCard.js';
import './HomePage.scss';

const HomePage = () => (
    <Container>
        <Row id="HomePage-wickTitleRow" className="HomePage-row">wick editor</Row>
        <Row id="HomePage-wickSubtitleRow" className="HomePage-row">click the letters!</Row>
        <Row id="HomePage-editorButtonRow" className="HomePage-row">
            <Col sm="2">
                <Button color="secondary" size="lg" block>get started!</Button>
            </Col>
        </Row>
        <Row id="HomePage-descTextRow" className="HomePage-row">
            <Col sm="6">
                wick is a free online editor for animations, games, and everything in between.
            </Col>
        </Row>
        <Row id="HomePage-promoVideoRow" className="HomePage-row">
            <div id="videoPlaceholder">Promo Video Placeholder</div>
        </Row>
        <Row id="HomePage-ourLatestRow" className="HomePage-row">our latest</Row>
        <Row className="HomePage-sectionHead HomePage-row">
            <div className="HomePage-sectionTitle">tutorials</div>
            <Col className="HomePage-sectionSubtitle" sm="6">
                Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
            </Col>
        </Row>
        <Row className="HomePage-cardContainer HomePage-row">
            <Col sm="9">
                <PreviewCardDeckContainer />
            </Col>
        </Row>
        <Row className="HomePage-webpageButtonRow HomePage-row">
            <Col sm="2">
                <Button color="secondary" size="sm" block>watch more</Button>
            </Col>
        </Row>
        <Row className="HomePage-sectionHead HomePage-row">
            <div className="HomePage-sectionTitle">examples</div>
            <Col className="HomePage-sectionSubtitle" sm="6">
                Check out some examples to help you get started using the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
            </Col>
        </Row>
        <Row className="HomePage-cardContainer HomePage-row">
            <Col sm="9">
                <PreviewCardDeckContainer />
            </Col>
        </Row>
        <Row className="HomePage-webpageButtonRow HomePage-row">
            <Col sm="2">
                <Button color="secondary" size="sm" block>see more</Button>
            </Col>
        </Row>
        <Row className="HomePage-sectionHead HomePage-row">
            <div className="HomePage-sectionTitle">updates</div>
        </Row>
        <Row className="HomePage-row">
            <Col sm="9">
                <UpdateTab />
            </Col>
        </Row>
        <Row id="HomePage-newsRow" className="HomePage-row">
            <Col className="test" sm="3"><NewsCard /></Col>
            <Col className="test" sm="3"><NewsCard /></Col>
            <Col className="test" sm="3"><NewsCard /></Col>
        </Row>
        <Row className="HomePage-row">
            <Col id="HomePage-supportRow" sm="6">
                <div id="HomePage-supportWick">Support Wick Editor</div>
                <div id="HomePage-supportText">
                    Join the wick editor community with a YouTube membership or Patreon subscription!
                </div>
            </Col>
        </Row>
        <Row id="HomePage-subscribeRow" className="HomePage-row">
            <Col sm="3">
                <Button outline color="secondary" block>Become a Patron</Button>
            </Col>
            <Col sm="3">
                <Button outline color="secondary" block>Subscribe on Youtube</Button>
            </Col>
        </Row>
    </Container>
);

export default HomePage;