/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Component, Fragment} from 'react';

import {CardDeck} from 'reactstrap';

import NewsCard from './NewsCard.js';

class NewsCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsItems: [
                {
                    title: "Awesome, Super Cool New Website Launches!",
                    date: "November 30, 2018",
                    hasExternalLink: false
                },
                {
                    title: "Wick Editor wins Mozilla Grant",
                    date: "October 15, 2018",
                    hasExternalLink: true,
                    link: "https://www.cmu.edu/news/stories/archives/2018/october/wick-editor.html"
                },
                {
                    title: "Wick Editor Version 0.15.2 Goes Live",
                    date: "June 28, 2018",
                    hasExternalLink: true,
                    link: "https://forum.wickeditor.com/t/wick-0-15-update-thread-video-export/461"
                }
            ],
            numberCards: 3
        };
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // code to match reactstrap cutoffs
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
            <Fragment>
                <CardDeck>
                    {this.state.newsItems.slice(0, this.state.numberCards).map(newsItem => (
                        <NewsCard key={newsItem.title} {...newsItem} />
                    ))}
                </CardDeck>
            </Fragment>
        );
    }
};

export default NewsCardDeckContainer;