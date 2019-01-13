/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportersPage.js

    Top-Level Content for the Wick Supporters page
*/

import React from 'react';
import Img from 'react-image';

import {Container, Row, Col} from 'reactstrap';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import {WickSmallSpacer} from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';
import SupportWick from '../../page_components/support/SupportWick.js';

import mozilla from '../../Images/Supporters/mozilla.svg';
import studio from '../../Images/Supporters/studio.svg';
import henryarmero from '../../Images/Supporters/henryarmero.svg';
import olympus from '../../Images/Supporters/olympus.svg';
import bxa from '../../Images/Supporters/bxa.svg';

import '../../scss_styles/SupportersPage.scss';

const SupportersPage = () => (
    <Container className="fadeIn animated">
        <ContentSection
            title="our supporters"
            text="The Wick Editor is supported by generous grants from organizations which support our mission, as well as donations from the community."
            includeUnderline
            includePadding
        />
        <Row className="Wick-row">
            <Col xs="10" md="8" lg="6" xl="5">
            <div className="SupportersPage-row">
                <Img src={mozilla} />
                <Img src={studio} />
            </div>
            <div className="SupportersPage-rowSpacer" />
            <div className="SupportersPage-row">
                <Img src={henryarmero} />
                <Img src={olympus} />
                <Img src={bxa} />
            </div>
            </Col>
        </Row>
        <WickSmallSpacer />
        <ContentSection
            text="You can become a supporter too"
            size="large"
            includePadding
        >
            <SupportWick />
        </ContentSection>
        <WickSmallSpacer />
    </Container>
);

export default SupportersPage;