/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

class NewsCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    title: "Support Wick Editor on Patreon!",
                    text: "Become a supporter and help Wick Editor continue to develop!",
                    date: "02/15/19",
                    onClick: () => window.open("https://forum.wickeditor.com/t/support-the-wick-editor-on-patreon/1072")
                },
                {
                    title: "Wick Editor Alpha update v3",
                    text: "We’ve posted a major update to the Wick Editor 1.0 Alpha",
                    date: "01/30/19",
                    onClick: () => window.open("https://forum.wickeditor.com/t/wick-editor-alpha-update-v3/1404")
                },
                {
                    title: "Wick Editor Alpha: Update v2",
                    text: "We’ve posted an update to the Wick Editor Alpha.",
                    date: "12/01/18",
                    onClick: () => window.open("https://forum.wickeditor.com/t/wick-editor-alpha-update-v2/1236")
                }
            ]
        };
    }

    render() {
        return (
            <WickCardDeckContainer
                {...this.state}
                type="news"
            />
        );
    }
};

export default NewsCardDeckContainer;