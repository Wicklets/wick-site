/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import { news } from '../../data/SiteData.js';

class NewsCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: news
        };
    }

    render() {
        return (
            <WickCardDeckContainer
                {...this.state}
                type="news"
                usePadding
            />
        );
    }
};

export default NewsCardDeckContainer;