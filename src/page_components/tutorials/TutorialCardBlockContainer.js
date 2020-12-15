/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Tutorial Card Block

    Edited by Alex Yixuan Xu (ayxx@nyu.edu)
*/

import React, { Component } from 'react';

import { tutorials } from '../../data/SiteData.js';

import '../../scss_styles/LearnPageFilter.scss';
import CardBlockContainer from '../card_block_container/CardBlockContainer.js';

class TutorialCardBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.tags = ["Beginner", "Intermediate", "Legacy",
        "Animation", "Games", "Interactive",
        "Text", "Buttons", "Sound", "Mouse", "Images", "Keyboard",
        "Tools", "Canvas", "Timeline"];
    }

    render() {
        return (
            <CardBlockContainer tags={this.tags} cards={tutorials} />
        );
    }
};

export default TutorialCardBlockContainer;
