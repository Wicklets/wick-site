/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    TutorialCardDeckContainer.js

    Container for Tutorial Card Decks
*/

import React, {Component, Fragment} from 'react';

import {CardDeck} from 'reactstrap';

import WickCardContainer from '../../pattern_library/card/WickCardContainer.js';

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
            ],
            numberCards: 3
        };
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // coded to match reactstrap cutoff
        this.setState({numberCards});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateNumberCards);
        this.updateNumberCards();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNumberCards);
    }

    render() {
        return (
            <Fragment>
                <CardDeck>
                    {this.state.tutorials.slice(0, this.state.numberCards).map(tutorial => (
                        <WickCardContainer key={tutorial.title} {...tutorial} />
                    ))}
                </CardDeck>
            </Fragment>
        );
    }
};


export default TutorialCardDeckContainer;