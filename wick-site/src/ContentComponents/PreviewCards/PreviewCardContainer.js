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
            overlayDisplayClass: ""
        };
    }

    showOverlay = () => this.setState({overlayDisplayClass: "fadeIn animated faster PreviewCard-overlay"});
    hideOverlay = () => this.setState({overlayDisplayClass: "fadeOut animated faster PreviewCard-overlay"});

    render() {
        return (
            <PreviewCard
                {...this.props}
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                overlayDisplayClass={this.state.overlayDisplayClass}/>
        );
    }
};

export default PreviewCardContainer;