/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SocialMedia.js

    Row of links for external social media and contacts
*/

import React from 'react';

import {Row} from 'reactstrap';
import Img from 'react-image';

import facebook from '../../Images/SocialMedia/facebook.svg';
import twitter from '../../Images/SocialMedia/twitter.svg';
import instagram from '../../Images/SocialMedia/instagram.svg';
import youtube from '../../Images/SocialMedia/youtube.svg';
import patreon from '../../Images/SocialMedia/patreon.svg';

import '../../scss_styles/SocialMedia.scss';

const SocialMedia = () => (
    <Row className="SocialMedia-containerRow Wick-row">
        <a className="SocialMedia-iconContainer" href="https://www.facebook.com/wickeditor/" target="_blank" rel="noopener noreferrer">
            <Img src={facebook} className="SocialMedia-icon" />
        </a>
        <a className="SocialMedia-iconContainer" href="https://twitter.com/wickeditor" target="_blank" rel="noopener noreferrer">
            <Img src={twitter} className="SocialMedia-icon" />
        </a>
        <a className="SocialMedia-iconContainer" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Img src={instagram} className="SocialMedia-icon" />
        </a>
        <a className="SocialMedia-iconContainer" href="https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg" target="_blank" rel="noopener noreferrer">
            <Img src={youtube} className="SocialMedia-icon" />
        </a>
        <a className="SocialMedia-iconContainer" href="https://www.patreon.com/WickEditor" target="_blank" rel="noopener noreferrer">
            <Img src={patreon} className="SocialMedia-icon" />
        </a>
    </Row>
);

export default SocialMedia;