/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Footer.js

    Footer information for website
*/

import React, {Fragment} from 'react';
import Img from 'react-image';

import clouds from '../../Images/clouds.svg';

import '../../scss_styles/Footer.scss';

const Footer = () => (
    <Fragment>
        <div id="Footer-imageContainer">
            <div id="Footer-image">
                <Img src={clouds} />
            </div>
        </div>
        <div id="Footer-container">
            <div id="Footer-content">
                {/* COMMENTED OUT UNTIL FOOTER CONTENT IS DETERMINED. ONE ELEMENT LEFT FOR SPACING PURPOSES
                <span className="Footer-item">Product</span>
                <span className="Footer-item">Company</span>
                <span className="Footer-item">Learn & Support</span>*/}
                <span className="Footer-item"></span>
            </div>
            <div id="Footer-copyright">© 2019, Wicklets, LLC.</div>
        </div>
    </Fragment>
);

export default Footer;