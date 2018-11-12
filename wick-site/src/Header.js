/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Navigation Bar for website
*/

import React from 'react';
import NavItem from './NavItem.js';
import './Header.scss';

const Header = ({page, onClick, hide}) => (
    <div
        id="Header-container"
        className={(!hide ? "Header-showNavBar" : "")}
    >
        <NavItem
            active={page === "home"}
            larger={true}
            onClick={() => onClick("home")}
            text="wickEditor"
        />
        <NavItem
            active={page === "create"}
            larger={false}
            onClick={() => onClick("create")}
            text="create"
        />
        <NavItem
            active={page === "learn"}
            larger={false}
            onClick={() => onClick("learn")}
            text="learn"
        />
        <NavItem
            active={page === "about"}
            larger={false}
            onClick={() => onClick("about")}
            text="about"
        />
        <NavItem
            active={page === "community"}
            larger={false}
            onClick={() => onClick("community")}
            text="community"
        />
    </div>
);

export default Header;