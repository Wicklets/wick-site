/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPage.js

    Top-Level Content for the Wick Learn page
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SectionContent from './SectionContent.js';
import LearnCardContainer from './LearnCardContainer.js';
import './LearnPage.scss';

const LearnPage = ({tutorials, examples}) => (
    <Container>
        <Row className="LearnPage-spacerRow" />
        <SectionContent title="Explore Examples" useSmallTitle>
            Here are a few examples to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
        </SectionContent>
        <Row className="LearnPage-contentRow LearnPage-row">
            <Col xs="12" lg="9">
                {examples.map(example => (
                    <LearnCardContainer key={example.title} {...example} />
                ))}
            </Col>
        </Row>
        <Row className="LearnPage-spacerRow" />
        <SectionContent title="Explore Tutorials" useSmallTitle>
            Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
        </SectionContent>
        <Row className="LearnPage-contentRow LearnPage-row">
            <Col xs="12" lg="9">
                {tutorials.map(tutorial => (
                    <LearnCardContainer key={tutorial.title} {...tutorial} />
                ))}
            </Col>
        </Row>
    </Container>
);

export default LearnPage;