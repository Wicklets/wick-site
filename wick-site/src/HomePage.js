/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import './HomePage.scss';

const HomePage = () => (
    <Container>
        <Row id="wickTitleRow">wick editor</Row>
        <Row id="wickSubtitleRow">click the letters!</Row>
        <Row id="editorButtonRow">
            <Col sm="2">
                <Button color="secondary" size="lg" block>get started!</Button>
            </Col>
        </Row>
        <Row id="descTextRow">
            <Col sm="7">
                wick is a free online editor for animations, games, and everything in between.
            </Col>
        </Row>
        <Row id="promoVideoRow">
            <div id="videoPlaceholder">Promo Video Placeholder</div>
        </Row>
        <Row id="ourLatestRow">our latest</Row>
        <Row className="sectionHead">
            <div className="sectionTitle">tutorials</div>
            <Col className="sectionSubtitle" sm="7">
                Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
            </Col>
        </Row>
        <Row className="cardContainer">
            <Col className="test" sm="4">Test</Col>
            <Col className="test" sm="4">Test</Col>
            <Col className="test" sm="4">Test</Col>
        </Row>
        <Row className="webpageButtonRow">
            <Col sm="2">
                <Button color="secondary" size="sm" block>watch more</Button>
            </Col>
        </Row>
        <Row className="sectionHead">
            <div className="sectionTitle">examples</div>
            <Col className="sectionSubtitle" sm="7">
                Check out some examples to help you get started using the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
            </Col>
        </Row>
        <Row className="cardContainer">
            <Col className="test" sm="4">Test</Col>
            <Col className="test" sm="4">Test</Col>
            <Col className="test" sm="4">Test</Col>
        </Row>
        <Row className="webpageButtonRow">
            <Col sm="2">
                <Button color="secondary" size="sm" block>see more</Button>
            </Col>
        </Row>
        <Row className="sectionHead">
            <div className="sectionTitle">updates</div>
        </Row>
        <Row id="updateRow">
            <div>update 3.5</div>
            <div>Some exciting description here. Try it out!</div>
            <Button id="updateButton" outline color="secondary" size="sm">try it</Button>
        </Row>
        <Row id="newsRow">
            <Col className="test" sm="4">Test</Col>
            <Col className="test" sm="4">Test</Col>
            <Col className="test" sm="4">Test</Col>
        </Row>
        <Row id="supportRow">
            <div id="supportWick">Support Wick Editor</div>
            <div id="supportText">
                Join the wick editor community with a YouTube membership or Patreon subscription!
            </div>
        </Row>
        <Row id="subscribeRow">
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