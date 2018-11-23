/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    AboutPage.js

    Top-Level Content for the Wick About page
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Img from 'react-image';
import SectionContent from './SectionContent.js';
import CreatorsRow from './CreatorsRow.js';
import editorpreview from './editorpreview.svg';
import coreyemery from './CoreyEmery.png';
import './AboutPage.scss';

const AboutPage = () => (
    <Container>
        <SectionContent title="What is Wick Editor?">
            The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects.
        </SectionContent>
        <Row className="AboutPage-editorPreviewRow AboutPage-row">
            <Img src={editorpreview} id="AboutPage-editorPreviewImage" />
        </Row>
        <Row id="AboutPage-editorTextRow" className="AboutPage-row">
            <Col sm="9" lg="6">
                The Wick Editor is a hybrid of an animation tool and a coding environment, heavily inspired by similar tools such as Flash, HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web. You can read more about the creation of the Wick Editor here.
            </Col>
        </Row>
        <SectionContent title="Who is Wick Editor?">
            The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects.
        </SectionContent>
        <CreatorsRow
            people={
                [{name: "Zach Rispoli", img: coreyemery},
                 {name: "Luca Damasco", img: coreyemery}]
            }
        >
            The Wick Editor was created and is led by
        </CreatorsRow>
        <CreatorsRow
            people={
                [{name: "Anna Gusman", img: coreyemery},
                 {name: "Cameron Burgess", img: coreyemery},
                 {name: "Gautam Bose", img: coreyemery}]
            }
        >
            Editor Interface design by
        </CreatorsRow>
        <CreatorsRow
            people={
                [{name: "Anna Gusman", img: coreyemery},
                 {name: "Corey Emery", img: coreyemery}]
            }
        >
            Brand and web design by
        </CreatorsRow>
    </Container>
);

export default AboutPage;