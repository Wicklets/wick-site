/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardContainer.js

    Container for News Cards
*/

import React, {Component} from 'react';

import NewsCard from './NewsCard.js';

class NewsCardContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isCardHovered: false
        };
    }

    toggleContent = () => this.setState(prevState => ({isCardHovered: !prevState.isCardHovered}));

    render() {
        return (
            <NewsCard
                {...this.props}
                toggleContent={this.toggleContent}
                isCardHovered={this.state.isCardHovered}/>
        );
    }
};

export default NewsCardContainer;