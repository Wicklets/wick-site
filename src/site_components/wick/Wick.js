/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Wick.js

    Top-Level React Component
*/

import React from 'react';
import { HashRouter } from 'react-router-dom';

import WickRouterContainer from '../router/WickRouterContainer.js';
import Footer from '../footer/Footer.js';
import SupportUs from '../support_us/SupportUs.js';

import '../../scss_styles/Wick.scss';

const Wick = () => {
    return (
        <div className="Wick">
            <div className="Wick-background" />
            <SupportUs />
            <HashRouter>
                <WickRouterContainer />
            </HashRouter>
            <Footer />
        </div>
    )
}


export default Wick;