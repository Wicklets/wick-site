/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContentSection.js

    Fragment to contain page content accompanied by a section title
*/

import React, {Fragment} from 'react';

import {Row, Col} from 'reactstrap';

import '../../scss_styles/ContentSection.scss';

const ContentSection = ({title, text, useSmallTitle, includeUnderline, children}) => (
    <Fragment>
        {title && (
            <Row className={(useSmallTitle ? "ContentSection-smallTitle" : "ContentSection-title") + " Wick-row"}>
                {title}
            </Row>
        )}
        {includeUnderline && (
            <Row className={(useSmallTitle ? "ContentSection-smallUnderline" : "ContentSection-underline") + " Wick-row"} />
        )}
        {text && (
            <Row className={(useSmallTitle ? "ContentSection-smallBody" : "ContentSection-body") + " Wick-row"}>
                <Col sm="9" lg="6">
                    {text}
                </Col>
            </Row>
        )}
        {children}
    </Fragment>
);

export default ContentSection;