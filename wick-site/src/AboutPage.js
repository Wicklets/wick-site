/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPage.js

    Top-Level Content for the Wick About page
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SectionContent from './SectionContent.js';
import editorpreview from './editorpreview.svg';
import './AboutPage.scss';

const AboutPage = () => (
    <Container>
        <SectionContent title="What is Wick Editor?">
            The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects.
        </SectionContent>
        <Row className="AboutPage-editorPreviewRow AboutPage-row">
            <img src={editorpreview} id="AboutPage-editorPreviewImage" alt="Editor Preview" />
        </Row>
        <Row id="AboutPage-editorTextRow" className="AboutPage-row">
            <Col sm="9" lg="6">
                The Wick Editor is a hybrid of an animation tool and a coding environment, heavily inspired by similar tools such as Flash, HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web. You can read more about the creation of the Wick Editor here.
            </Col>
        </Row>
        <SectionContent title="Who is Wick Editor?">
            The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects.
        </SectionContent>
    </Container>
);

export default AboutPage;