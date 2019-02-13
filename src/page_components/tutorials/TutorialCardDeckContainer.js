/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    TutorialCardDeckContainer.js

    Container for Tutorial Card Decks
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import test from '../../Images/Tutorials/testworld2.svg';
import comingsoon from '../../Images/Misc/comingsoon.png';

class TutorialCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    title: "Getting Started with Wick Editor",
                    body: "In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
                    image: test,
                    embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
                    number: "Tutorial 1"
                },
                {
                    title: "Sounds in Wick Editor",
                    body: "Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",
                    image: test,
                    embed: "https://www.youtube.com/embed/T08B0KkEAZA",
                    number: "Tutorial 2"
                },
                {
                    title: "More Tutorials Coming Soon!",
                    image: comingsoon,
                    disabled: true
                }
            ],
            linkButton: {
                text: "watch more",
                onClick: () => window.open("http://wickeditor.com/#tutorials")
            }
        };
    }

    render() {
        return (
            <WickCardDeckContainer
                {...this.state}
                type="tutorial"
                usePadding
            />
        );
    }
};


export default TutorialCardDeckContainer;