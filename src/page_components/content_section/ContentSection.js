/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContentSection.js

    Fragment to contain page content accompanied by a section title
*/

import React, {Fragment} from 'react';

import {Row, Col} from 'reactstrap';

import '../../scss_styles/ContentSection.scss';

const ContentSection = ({title, text, size, includeUnderline, includePadding, children}) => (
    <Fragment>
        {title && (
            <div className={"ContentSection-title" + (size ? "--" + size : "")}>
                {title}
            </div>
        )}
        {includeUnderline && (
            <div className={"ContentSection-underline" + (size ? "--" + size : "")} />
        )}
        {text && (
            <Row className={"ContentSection-body" + (size ? "--" + size : "") + " Wick-row"}>
                <Col sm="9" lg="6">
                    {text}
                </Col>
            </Row>
        )}
        {includePadding && (
            <div className="ContentSection-padding" />
        )}
        {children}
    </Fragment>
);

export default ContentSection;