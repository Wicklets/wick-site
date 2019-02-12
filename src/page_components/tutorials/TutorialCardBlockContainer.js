/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Tutorial Card Block
*/

import React, { Fragment, Component } from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import test from '../../Images/Tutorials/testworld.svg';
import comingsoon from '../../Images/Misc/comingsoon.png';

class TutorialCardBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberCards: 3,
            numberRows: 1,
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
                    body: "Check back soon for more awesome Wick Editor Tutorials!",
                    image: comingsoon,
                    embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
                    number: "Tutorial 3"
                },
                {
                    title: "Getting Started with Wick Editors",
                    body: "In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
                    image: test,
                    embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
                    number: "Tutorial 4"
                },
                {
                    title: "Sounds in Wick Editors",
                    body: "Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",
                    image: test,
                    embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
                    number: "Tutorial 5"
                }
            ]
        };
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // coded to match reactstrap cutoff
        var numberRows = Math.ceil(this.state.cards.length / numberCards)
        this.setState({numberCards, numberRows});
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
                {([...Array(this.state.numberRows).keys()]).map(rowInd => (
                    <WickCardDeckContainer
                        key={rowInd}
                        cards={this.state.cards.slice(this.state.numberCards*rowInd, this.state.numberCards*(rowInd + 1))}
                        usePadding
                    />
                ))}
            </Fragment>
        );
    }
};

export default TutorialCardBlockContainer;