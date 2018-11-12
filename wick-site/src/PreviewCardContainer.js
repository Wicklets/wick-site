/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCardDeckContainer.js

    Container for Example/Tutorial Card Decks on the Homepage
*/

import React, {Component} from 'react';
import PreviewCard from './PreviewCard.js';

class PreviewCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            displayOverlay: false
        };
    }

    showOverlay = () => this.setState({displayOverlay: true});
    hideOverlay = () => this.setState({displayOverlay: false});

    render() {
        return (
            <PreviewCard
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                displayOverlay={this.state.displayOverlay}/>
        );
    }
};

export default PreviewCardDeckContainer;