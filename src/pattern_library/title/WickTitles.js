/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickTitle.js

    Title component for Wick
*/

import React from 'react';

import '../../scss_styles/WickTitles.scss';

export const WickTitle = ({children}) => (<h2 className="WickTitles-title">{children}</h2>);

export const WickSubTitle = ({children}) => (<div className="WickTitles-subtitle">{children}</div>);