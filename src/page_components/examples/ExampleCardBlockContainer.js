/*
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Example Card Block
*/

import React, { Component } from 'react';

import { examples } from '../../data/SiteData.js';

import '../../scss_styles/LearnPageFilter.scss';
import CardBlockContainer from '../card_block_container/CardBlockContainer.js';

class ExampleCardBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.tags =  ["Beginner", "Intermediate", "Legacy",
        "Animation", "Games", "Interactive",
        "Text", "Buttons", "Sound", "Mouse", "Images", "Keyboard",
        "Tools", "Canvas", "Timeline"];
    }

    render() {

        return (
            <CardBlockContainer tags={this.tags} cards={examples} />
        );
    }
};

export default ExampleCardBlockContainer;