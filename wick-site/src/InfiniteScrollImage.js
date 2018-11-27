/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    InfiniteScrollImage.js

    Header and Footer Image Component to adjust to width of screen
*/

import React from 'react';
import Img from 'react-image';
import './InfiniteScrollImage.scss';

const InfiniteScrollImage = ({mainImg, leftImg, rightImg, numberPadding, footer}) => (
    <div className="InfiniteScrollImage-container">
        <div className={(footer ? "InfiniteScrollImage-image--footer" : "InfiniteScrollImage-image--header")}>
        {([...Array(numberPadding).keys()]).map(elem => (
            <Img key={elem} src={leftImg} />
        ))}
        <Img src={mainImg} />
        {([...Array(numberPadding).keys()]).map(elem => (
            <Img key={elem} src={rightImg} />
        ))}
        </div>
    </div>
);

export default InfiniteScrollImage;