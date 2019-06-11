/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CreatorsRow.js

    Row for creators' image/credit for role in project
*/

import React, {Fragment} from 'react';

import {Row} from 'reactstrap';

import Creator from './Creator.js';

import '../../scss_styles/CreatorsRow.scss';

const CreatorsRow = ({people, title, includeHeadshot}) => (
    <Fragment>
        <div className="CreatorsRow-description">
            {title}
        </div>
        <Row className="CreatorsRow-people Wick-row">
            {people.map(person => (
                <Creator
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    img={person.img}
                    includeHeadshot={includeHeadshot}
                />
            ))}
        </Row>
    </Fragment>
);

export default CreatorsRow;
