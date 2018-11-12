/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NavItem.js

    Individual Item for the Nav Bar
*/

import React from 'react';
import './NavItem.scss';

const NavItem = ({active, larger, onClick, text}) => (
    <div
        id={(active ? "NavItem-active" : "")}
        className={(larger ? "NavItem-larger" : " NavItem")}
        onClick={onClick}
    >
        {text}
    </div>
);

export default NavItem;