/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardDeckContainer.js

    Container for Example Card Decks
*/

import React, {Component, Fragment} from 'react';

import {CardDeck} from 'reactstrap';

import WickCardContainer from '../../pattern_library/card/WickCardContainer.js';

import example1 from '../../Images/Examples/example1.png';
import example2 from '../../Images/Examples/example2.png';
import comingsoon from '../../Images/Misc/comingsoon.png';

class ExampleCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            examples: [
                {
                    title: "Follow Mouse",
                    body: "See how you can get your character to follow your mouse movements around the screen!",
                    image: example1,
                    isClickable: true,
                    onClick: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=FollowMouse.json")
                },
                {
                    title: "Multiple Rooms",
                    body: "Learn about how you can insert multiple different scenes into your animation.",
                    image: example2,
                    isClickable: true,
                    onClick: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=MultipleRooms.json")
                },
                {
                    title: "More Examples Coming Soon!",
                    body: "Check back soon for more awesome Wick Editor Examples!",
                    image: comingsoon,
                    isClickable: false
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
                    {this.state.examples.slice(0, this.state.numberCards).map(example => (
                        <WickCardContainer key={example.title} {...example} />
                    ))}
                </CardDeck>
            </Fragment>
        );
    }
};

export default ExampleCardDeckContainer;