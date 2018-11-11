/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Navigation Bar for website
*/

import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import './Header.scss';

var cx = classNames.bind(styles);

const Header = ({page, onClick}) => (
    <div id="headerContainer">
        <div
            id={cx({active: page === "home"})}
            className="navItem"
            onClick={() => onClick("home")}
        >
            wick editor
        </div>
        <div
            id={cx({active: page === "create"})}
            className="navItem"
            onClick={() => onClick("create")}
        >
            create
        </div>
        <div
            id={cx({active: page === "learn"})}
            className="navItem"
            onClick={() => onClick("learn")}
        >
            learn
        </div>
        <div
            id={cx({active: page === "about"})}
            className="navItem"
            onClick={() => onClick("about")}
        >
            about
        </div>
        <div
            id={cx({active: page === "community"})}
            className="navItem"
            onClick={() => onClick("community")}
        >
            community
        </div>
    </div>
);

export default Header;