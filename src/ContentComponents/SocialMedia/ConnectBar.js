/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ConnectBar.js

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

import '../../scss_styles/ConnectBar.scss';

const ConnectBar = () => (
    <Row className="ConnectBar-containerRow Wick-row">
        <a className="ConnectBar-iconContainer" href="https://www.facebook.com/wickeditor/" target="_blank" rel="noopener noreferrer">
            <Img src={facebook} className="ConnectBar-icon" />
        </a>
        <a className="ConnectBar-iconContainer" href="https://twitter.com/wickeditor" target="_blank" rel="noopener noreferrer">
            <Img src={twitter} className="ConnectBar-icon" />
        </a>
        <a className="ConnectBar-iconContainer" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Img src={instagram} className="ConnectBar-icon" />
        </a>
        <a className="ConnectBar-iconContainer" href="https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg" target="_blank" rel="noopener noreferrer">
            <Img src={youtube} className="ConnectBar-icon" />
        </a>
        <a className="ConnectBar-iconContainer" href="https://www.patreon.com/WickEditor" target="_blank" rel="noopener noreferrer">
            <Img src={patreon} className="ConnectBar-icon" />
        </a>
    </Row>
);

export default ConnectBar;