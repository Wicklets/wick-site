/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SocialMedia.js

    Row of links for external social media and contacts
*/

import React from 'react';

import SocialMediaIcon from './SocialMediaIcon.js';

import facebook from '../../Images/SocialMedia/facebook.svg';
import facebookdark from '../../Images/SocialMedia/facebook_dark.svg';
import twitter from '../../Images/SocialMedia/twitter.svg';
import twitterdark from '../../Images/SocialMedia/twitter_dark.svg';
import instagram from '../../Images/SocialMedia/instagram.svg';
import instagramdark from '../../Images/SocialMedia/instagram_dark.svg';
import patreon from '../../Images/SocialMedia/patreon.svg';
import patreondark from '../../Images/SocialMedia/patreon_dark.svg';

import '../../scss_styles/SocialMedia.scss';

const SocialMedia = () => (
    <div className="SocialMedia-container">
        <SocialMediaIcon image={facebook} highlight={facebookdark} link="https://www.facebook.com/wickeditor/" alt="Favebook Icon"/>
        <SocialMediaIcon image={twitter} highlight={twitterdark} link="https://twitter.com/wickeditor" alt="Twitter Icon"/>
        <SocialMediaIcon image={instagram} highlight={instagramdark} link="https://www.instagram.com/wickeditor" alt="Instagram Icon"/>
        <SocialMediaIcon image={patreon} highlight={patreondark} link="https://www.patreon.com/WickEditor" alt="Patreon Icon"/>
    </div>
);

export default SocialMedia;
