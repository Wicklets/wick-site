/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportersContainer.js

    Content for the Wick Supporters
*/

import React, { Component, Fragment } from 'react';

import SupportersRow from './SupportersRow.js';

import coreyemery from '../../Images/People/CoreyEmery.jpg';

class SupportersContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: [
                {name: "Name McName1", img: coreyemery},
                {name: "Name McName2", img: coreyemery},
                {name: "Name McName3", img: coreyemery},
                {name: "Name McName4", img: coreyemery},
                {name: "Name McName5", img: coreyemery},
                {name: "Name McName6", img: coreyemery},
                {name: "Name McName7", img: coreyemery},
                {name: "Name McName8", img: coreyemery},
                {name: "Name McName9", img: coreyemery},
                {name: "Name McName0", img: coreyemery}
            ],
            topMiddle: [
                {name: "Name McName11", img: coreyemery},
                {name: "Name McName12", img: coreyemery},
                {name: "Name McName13", img: coreyemery},
                {name: "Name McName14", img: coreyemery},
                {name: "Name McName15", img: coreyemery},
                {name: "Name McName16", img: coreyemery},
                {name: "Name McName17", img: coreyemery},
                {name: "Name McName18", img: coreyemery},
                {name: "Name McName19", img: coreyemery},
                {name: "Name McName20", img: coreyemery},
                {name: "Name McName10", img: coreyemery}
            ],
            lowMiddle: [
                {name: "Name McName21", img: coreyemery},
                {name: "Name McName22", img: coreyemery},
                {name: "Name McName23", img: coreyemery},
                {name: "Name McName24", img: coreyemery},
                {name: "Name McName25", img: coreyemery},
                {name: "Name McName26", img: coreyemery},
                {name: "Name McName27", img: coreyemery},
                {name: "Name McName28", img: coreyemery},
            ],
            low: [
                {name: "Name McName31", img: coreyemery},
                {name: "Name McName32", img: coreyemery},
                {name: "Name McName33", img: coreyemery},
                {name: "Name McName34", img: coreyemery},
                {name: "Name McName35", img: coreyemery}
            ]
        };
    }

    render() {
        return (
            <Fragment>
                <SupportersRow
                    people={this.state.top}
                />
                <SupportersRow
                    people={this.state.topMiddle}
                />
                <SupportersRow
                    people={this.state.lowMiddle}
                />
                <SupportersRow
                    people={this.state.low}
                />
            </Fragment>
        )
    }
};

export default SupportersContainer;