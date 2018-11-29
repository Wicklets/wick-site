/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCardContainer.js

    Container for Example/Tutorial Cards
*/

import React, {Component} from 'react';
import PreviewCard from './PreviewCard.js';

class PreviewCardContainer extends Component {
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
                {...this.props}
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                displayOverlay={this.state.displayOverlay}/>
        );
    }
};

export default PreviewCardContainer;