/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardDeckContainer.js

    Container for Example Card Decks
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import test from '../../Images/Tutorials/testworld.svg';
import comingsoon from '../../Images/Misc/comingsoon.png';

class ExampleCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    title: "Follow Mouse",
                    body: "See how you can get your character to follow your mouse movements around the screen!",
                    image: test,
                    onClick: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=FollowMouse.json")
                },
                {
                    title: "Multiple Rooms",
                    body: "Learn about how you can insert multiple different scenes into your animation.",
                    image: test,
                    onClick: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=MultipleRooms.json")
                },
                {
                    title: "More Examples Coming Soon!",
                    body: "Check back soon for more awesome Wick Editor Examples!",
                    image: comingsoon
                }
            ],
            linkButton: {
                text: "see more",
                onClick: () => window.open("http://wickeditor.com/#examples")
            }
        };
    }

    render() {
        return (
            <WickCardDeckContainer
                {...this.state}
                usePadding
            />
        );
    }
};

export default ExampleCardDeckContainer;