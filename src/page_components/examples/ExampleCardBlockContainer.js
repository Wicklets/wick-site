/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Example Card Block
*/

import React, { Fragment, Component } from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import test from '../../Images/Tutorials/testworld.svg';
import comingsoon from '../../Images/Misc/comingsoon.png';

class ExampleCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberCards: 3,
            numberRows: 1,
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
                },
                {
                    title: "Follow Mousi",
                    body: "See how you can get your character to follow your mouse movements around the screen!",
                    image: test,
                    onClick: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=FollowMouse.json")
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
                        includeModal
                    />
                ))}
            </Fragment>
        );
    }
};

export default ExampleCardDeckContainer;