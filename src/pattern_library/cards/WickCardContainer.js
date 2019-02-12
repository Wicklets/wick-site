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
            isContentHovered: false,
            isModalOpen: false
        };
    }

    handleMouseEnter = () => (this.props.disabled ?
        {} :
        this.setState({isContentHovered: true}));

    handleMouseLeave = () => (this.props.disabled ?
        {} :
        this.setState({isContentHovered: false}));

    shouldUseNewsCard = () => this.props.useNewsCard;

    handleClick = () => (this.props.disabled ?
        {} :
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen})));

    render() {
        return (
            (this.shouldUseNewsCard() ? (
                <NewsCard
                    {...this.props}
                    {...this.state}
                    onClick={this.handleClick}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
            ) : (
                <WickCard
                    {...this.props}
                    {...this.state}
                    onClick={this.handleClick}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
            ))
        );
    }
};

export default WickCardContainer;

