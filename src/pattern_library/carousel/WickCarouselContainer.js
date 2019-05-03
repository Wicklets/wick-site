/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCarouselContainer.js

    Container for Creator Card Carousel
*/

import React, { Component } from 'react';

import WickCarousel from './WickCarousel.js';
import { carouselProjects } from '../../data/SiteData.js';

class WickCarouselContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: carouselProjects,
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

    goToIndex = newIndex => {
        if (this.animating) return;
        this.setState({index: newIndex});
      }

    render() {
        return (
            <WickCarousel
                activeIndex={this.state.index}
                content={this.state.cards}
                next={this.nextCard}
                previous={this.prevCard}
                goToIndex={this.goToIndex}
                onExited={this.onExited}
                onExiting={this.onExiting}
            />
        );
    }
};

export default WickCarouselContainer;