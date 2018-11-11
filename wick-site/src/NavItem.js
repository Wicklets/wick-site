/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NavItem.js

    Individual Item for the Nav Bar
*/

import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavItem.scss';
import './NavItem.scss';

var cx = classNames.bind(styles);

const NavItem = ({active, larger, onClick, text}) => (
    <div
        id={cx({activeNavItem: active})}
        className={cx({largerNavItem: larger}) + " navItem"}
        onClick={onClick}
    >
        {text}
    </div>
);

export default NavItem;