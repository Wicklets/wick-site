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
                <span className="Footer-item"></span>
            </div>
            <div className="Footer-links">
                <div className="Footer-link-item"><a className="Footer-link" href='/#/privacy-policy/'>Privacy Policy</a></div>
                <div className="Footer-link-item"><a className="Footer-link" href='/#/terms-of-service/'>Terms of Service</a></div>
                <div className="Footer-link-item"><a className="Footer-link" href='/#/cookie-policy/'>Cookie Policy</a></div>
            </div>
            <div id="Footer-copyright">© 2019, Wicklets, LLC.</div>
        </div>
    </Fragment>
);

export default Footer;