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

import ReactGA from 'react-ga';

import '../../scss_styles/Wick.scss';

const Wick = () => {
    ReactGA.initialize('UA-88233944-1');
    ReactGA.set({ anonymizeIp: true }); // Anonymize IP information.
    return (
        <div className="Wick">
            <div className="Wick-background" />
            <HashRouter>
                <WickRouterContainer />
            </HashRouter>
            <Footer />
        </div>
    )
}


export default Wick;