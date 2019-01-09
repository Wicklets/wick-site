/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    TutorialCardDeckContainer.js

    Container for Tutorial Card Decks
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/card/WickCardDeckContainer.js';

import test from '../../Images/Tutorials/testworld.svg';
import comingsoon from '../../Images/Misc/comingsoon.png';

class TutorialCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tutorials: [
                {
                    title: "Getting Started with Wick Editor",
                    body: "In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
                    image: test,
                    onClick: () => window.open("https://www.youtube.com/watch?v=bhN2VxyWJiU")
                },
                {
                    title: "Sounds in Wick Editor",
                    body: "Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",
                    image: test,
                    onClick: () => window.open("https://www.youtube.com/watch?v=T08B0KkEAZA")
                },
                {
                    title: "More Tutorials Coming Soon!",
                    body: "Check back soon for more awesome Wick Editor Tutorials!",
                    image: comingsoon,
                }
            ]
        };
    }

    render() {
        return (
            <WickCardDeckContainer cards={this.state.tutorials} usePadding />
        );
    }
};


export default TutorialCardDeckContainer;