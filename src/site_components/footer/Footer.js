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

/**
 * Create a default preference modal which is overridden when loading the termly banner.
 */
let displayPreferenceModal = () => {
    console.warn("Preference Modal Not downloaded, contact site manager for assistance.");
}

// Embed the termly cookie banner.
(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://app.termly.io/embed.min.js';
    s.id = '6f456f6b-6324-4fed-99b7-b603532d30a5';
    s.setAttribute("data-name", "termly-embed-banner");
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();

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
            <div id="footer-cookie-policy"><a href='/#/privacy-policy/'>Privacy Policy</a></div>
            <div id="footer-cookie-policy"><a href='/#/terms-of-service/'>Terms of Service</a></div>
            <div id="footer-cookie-policy"><a href='/#/cookie-policy/'>Cookie Policy</a></div>
            <div id="footer-cookie-policy" onClick={() => displayPreferenceModal()}>Manage Cookie Preferences</div>
            <div id="Footer-copyright">© 2019, Wicklets, LLC.</div>
        </div>
    </Fragment>
);

export default Footer;