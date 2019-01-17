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
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery}
            ],
            topMiddle: [
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery}
            ],
            lowMiddle: [
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
            ],
            low: [
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery},
                {name: "Name McName", img: coreyemery}
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