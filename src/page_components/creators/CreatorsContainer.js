/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Creators.js

    Content for the Wick Creators
*/

import React, { Component, Fragment } from 'react';

import CreatorsRow from './CreatorsRow.js';

import coreyemery from '../../Images/People/CoreyEmery.jpg';
import lucadamasco from '../../Images/People/LucaDamasco.jpg';
import zachrispoli from '../../Images/People/ZachRispoli.png';
import annagusman from '../../Images/People/AnnaGusman.jpeg';

class CreatorsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            creators: [
                {name: "Zach Rispoli", img: zachrispoli},
                {name: "Luca Damasco", img: lucadamasco}
            ],
            webDesigners: [
                {name: "Anna Gusman", img: annagusman},
                {name: "Corey Emery", img: coreyemery}
            ],
            editorDesigners: [
                {name: "Anna Gusman"},
                {name: "Cameron Burgess"},
                {name: "Gautam Bose"}
            ]
        };
    }

    render() {
        return (
            <Fragment>
                <CreatorsRow
                    people={this.state.creators}
                    title="The Wick Editor was created and is led by"
                    includeHeadshot
                />
                <CreatorsRow
                    people={this.state.webDesigners}
                    title="Brand and web design by"
                    includeHeadshot
                />
                <CreatorsRow
                    people={this.state.editorDesigners}
                    title="Editor Interface design by"
                />
            </Fragment>
        )
    }
};

export default CreatorsContainer;