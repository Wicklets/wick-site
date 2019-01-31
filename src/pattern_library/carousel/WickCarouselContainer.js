/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCarouselContainer.js

    Container for Creator Card Carousel
*/

import React, { Component } from 'react';

import WickCarousel from './WickCarousel.js';

class WickCarouselContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: ["test1", "test2", "test3"],
            index: 0
        };
    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    nextCard = () => {
        if (this.animating) return;
        this.setState(prevState => ({index: (prevState.index + 1) % prevState.cards.length}));
    }

    prevCard = () => {
        if (this.animating) return;
        this.setState(prevState => ({index: prevState.index === 0 ? prevState.cards.length - 1 : prevState.index - 1}));
    }

    render() {
        return (
            <WickCarousel
                activeIndex={this.state.index}
                content={this.state.cards}
                next={this.nextCard}
                previous={this.prevCard}
                onExited={this.onExited}
                onExiting={this.onExiting}
            />
        );
    }
};

export default WickCarouselContainer;