/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardContainer.js

    Container for Cards
*/

import React, {Component} from 'react';

import WickCard from './WickCard.js';

class WickCardContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isContentExpanded: false
        };
    }

    toggleContent = () => this.setState(prevState => ({isContentExpanded: !prevState.isContentExpanded}));

    render() {
        return (
            <WickCard
                {...this.props}
                toggleContent={this.toggleContent}
                isContentExpanded={this.state.isContentExpanded}/>
        );
    }
};

export default WickCardContainer;