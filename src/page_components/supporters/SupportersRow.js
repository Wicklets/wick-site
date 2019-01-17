/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportersRow.js

    Row for supporters' image/credit for role in project
*/

import React from 'react';

import {Row} from 'reactstrap';

import Supporter from './Supporter.js';

import '../../scss_styles/SupportersRow.scss';

const SupportersRow = ({people}) => (
    <Row className="SupportersRow-people Wick-row">
        {people.map(person => (
            <Supporter
                key={person.name}
                name={person.name}
                img={person.img}
            />
        ))}
    </Row>
);

export default SupportersRow;