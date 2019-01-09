/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/card/WickCardDeckContainer.js';

class NewsCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsItems: [
                {
                    title: "News Item!",
                    text: "News subtitle description",
                    date: "11/30/18"
                },
                {
                    title: "News Item",
                    text: "Longer news subtitle description. This is what it looks like.",
                    date: "10/15/18",
                    link: "https://www.cmu.edu/news/stories/archives/2018/october/wick-editor.html"
                },
                {
                    title: "News Item?",
                    text: "Longer news subtitle description. This is what it looks like.",
                    date: "06/28/18",
                    link: "https://forum.wickeditor.com/t/wick-0-15-update-thread-video-export/461"
                }
            ]
        };
    }

    render() {
        return (
            <WickCardDeckContainer cards={this.state.newsItems} useNewsCard />
        );
    }
};

export default NewsCardDeckContainer;