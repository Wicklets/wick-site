/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Component} from 'react';

import NewsCardDeck from './NewsCardDeck.js';

class NewsCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsItems: [
                {
                    title: "News Item!",
                    date: "11/30/18",
                    hasExternalLink: false
                },
                {
                    title: "News Item",
                    date: "10/15/18",
                    hasExternalLink: true,
                    link: "https://www.cmu.edu/news/stories/archives/2018/october/wick-editor.html"
                },
                {
                    title: "News Item",
                    date: "06/28/18",
                    hasExternalLink: true,
                    link: "https://forum.wickeditor.com/t/wick-0-15-update-thread-video-export/461"
                }
            ],
            numberCards: 3
        };
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // coded to match reactstrap cutoffs
        this.setState({numberCards});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateNumberCards);
        this.updateNumberCards();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNumberCards);
    }

    render() {
        return (
            <NewsCardDeck newsItems={this.state.newsItems.slice(0, this.state.numberCards)} />
        );
    }
};

export default NewsCardDeckContainer;