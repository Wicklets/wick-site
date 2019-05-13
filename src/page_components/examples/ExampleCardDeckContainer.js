/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardDeckContainer.js

    Container for Example Card Decks
*/

import React, { Component } from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import { examples } from '../../data/SiteData.js';

class ExampleCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: examples.slice(0,3),
            linkButton: {
                text: this.props.text,
                onClick: this.props.onClick,
                routerLink: this.props.routerLink
            }
        };
    }

    render() {
        return (
            <WickCardDeckContainer
                {...this.state}
                type="example"
                usePadding
            />
        );
    }
};

export default ExampleCardDeckContainer;