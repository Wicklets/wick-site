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
import CreatorsRow from '../../ContentComponents/Creators/CreatorsRow.js';
import ConnectBar from '../../ContentComponents/SocialMedia/ConnectBar.js';
import editorpreview from '../../Images/Misc/editorpreview.svg';

import cannon from '../../Images/Misc/cannon.svg';
import coreyemery from '../../Images/People/CoreyEmery.jpg';
import lucadamasco from '../../Images/People/LucaDamasco.jpg';
import zachrispoli from '../../Images/People/ZachRispoli.png';
import annagusman from '../../Images/People/AnnaGusman.jpeg';

import '../../scss_styles/AboutPage.scss';

const AboutPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="What is Wick Editor?"
            text="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects."
            includeUnderline
        >
        </ContentSection>
        <Row id="AboutPage-editorPreviewRow" className="Wick-row">
            <Col xs="12" lg="9">
                <Img src={editorpreview} id="AboutPage-editorPreviewImage" />
            </Col>
        </Row>
        <Row id="AboutPage-editorTextRow" className="Wick-row">
            <Col sm="9" lg="6">
                The Wick Editor is a hybrid of an animation tool and a coding environment, heavily inspired by similar tools such as Flash, HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web. You can read more about the creation of the Wick Editor here.
            </Col>
        </Row>
        <ContentSection
            title="Who is Wick Editor?"
            text="The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects."
            includeUnderline
        >
        </ContentSection>
        <CreatorsRow
            people={
                [{name: "Zach Rispoli", img: zachrispoli},
                 {name: "Luca Damasco", img: lucadamasco}]
            }
            includeHeadshot
        >
            The Wick Editor was created and is led by
        </CreatorsRow>
        <CreatorsRow
            people={
                [{name: "Anna Gusman", img: annagusman},
                 {name: "Corey Emery", img: coreyemery}]
            }
            includeHeadshot
        >
            Brand and web design by
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
        <Row id="AboutPage-cannonImageRow" className="Wick-row">
            <Img src={cannon} />
        </Row>
        <ContentSection
            title="special thanks to"
            text="Golan Levin, Tom Hughes, Sarah Guthals, Nina Barbuto (and everyone at Assemble including Jess Gold and Lieu Wolfe)"
            includeUnderline
        />
        <Row className="AboutPage-spacerRow" />
        <ContentSection
            title="contact us!"
            text="Shoot us a message, join the wick editor community with a YouTube membership or subscribe on Patreon!"
            includeUnderline
        >
        </ContentSection>
        <ConnectBar />
    </Container>
);

export default AboutPage;