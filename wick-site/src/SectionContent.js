/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SectionContent.js

    Fragment to contain page content accompanied by a section title
*/

import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import './SectionContent.scss';

const SectionContent = ({title, includeUnderline, children}) => (
    <Fragment>
        <Row className="SectionContent-title SectionContent-row">
            {title}
        </Row>
        {includeUnderline && (
            <Row className="SectionContent-underline SectionContent-row" />
        )}
        <Row className="SectionContent-body SectionContent-row">
            <Col sm="9" lg="6">
                {children}
            </Col>
        </Row>
    </Fragment>
);

export default SectionContent;