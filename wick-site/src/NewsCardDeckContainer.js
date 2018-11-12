/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardDeckContainer.js

    Container for News Card Decks on the Homepage
*/

import React, {Fragment} from 'react';
import {CardDeck} from 'reactstrap';
import NewsCard from './NewsCard.js';

const NewsCardDeckContainer = () => (
    <Fragment>
        <CardDeck>
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </CardDeck>
    </Fragment>
);

export default NewsCardDeckContainer;