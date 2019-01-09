/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardContainer.js

    Container for Cards
*/

import React, {Component} from 'react';

import WickCard from './WickCard.js';
import NewsCard from './NewsCard.js';

class WickCardContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isContentHovered: false
        };
    }

    toggleContent = () => this.setState(prevState => ({isContentHovered: !prevState.isContentHovered}));

    shouldUseNewsCard = () => this.props.useNewsCard

    render() {
        return (
            (this.shouldUseNewsCard() ? (
                <NewsCard
                    {...this.props}
                    toggleContent={this.toggleContent}
                    isContentHovered={this.state.isContentHovered}
                />
            ) : (
                <WickCard
                    {...this.props}
                    toggleContent={this.toggleContent}
                    isContentHovered={this.state.isContentHovered}
                />
            ))
        );
    }
};

export default WickCardContainer;

