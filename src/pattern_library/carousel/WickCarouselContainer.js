/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCarouselContainer.js

    Container for Creator Card Carousel
*/

import React, { Component } from 'react';

import WickCarousel from './WickCarousel.js';

import coreyemery from '../../Images/People/CoreyEmery.jpg';
import lucadamasco from '../../Images/People/LucaDamasco.jpg';
import zachrispoli from '../../Images/People/ZachRispoli.png';
import community3 from '../../Images/Projects/community3.png';
import community4 from '../../Images/Projects/community4.png';
import community5 from '../../Images/Projects/community5.png';

class WickCarouselContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [{
                username: "Corey Emery",
                userImage: coreyemery,
                projectImage: community3,
                description: "project description blah blah blah"
            },
            {
                username: "Luca Damasco",
                userImage: lucadamasco,
                projectImage: community4,
                description: "project description blah blah blah"
            },
            {
                username: "Zach Rispoli",
                userImage: zachrispoli,
                projectImage: community5,
                description: "project description blah blah blah"
            }],
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