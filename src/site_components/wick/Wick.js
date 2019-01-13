/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Wick.js

    Top-Level React Component
*/

import React from 'react';

import WickRouterContainer from '../router/WickRouterContainer.js';
import Footer from '../footer/Footer.js';

import '../../scss_styles/Wick.scss';

const Wick = () => (
    <div className="Wick">
        <div className="Wick-background" />
        <WickRouterContainer />
        <Footer />
    </div>
);

export default Wick;