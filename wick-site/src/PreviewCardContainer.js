/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCardContainer.js

    Container for Example/Tutorial Cards on the Homepage
*/

import React, {Component} from 'react';
import PreviewCard from './PreviewCard.js';

class PreviewCardContainer extends Component {
    constructor(props) {
        super(props);

        // Website current page
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
                displayOverlay={this.state.displayOverlay}
            />
        );
    }
};

export default PreviewCardContainer;