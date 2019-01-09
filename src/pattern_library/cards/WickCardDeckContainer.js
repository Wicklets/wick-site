/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardDeckContainer.js

    Container for Wick Card Decks
*/

import React, {Component} from 'react';

import WickCardDeck from './WickCardDeck.js';

class WickCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            <WickCardDeck
                {...this.props}
                cards={this.props.cards.slice(0, this.state.numberCards)}
            />
        );
    }
};


export default WickCardDeckContainer;