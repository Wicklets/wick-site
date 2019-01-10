/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SocialMedia.js

    Row of links for external social media and contacts
*/

import React from 'react';

import SocialMediaIcon from './SocialMediaIcon.js';

import facebook from '../../Images/SocialMedia/facebook.svg';
import twitter from '../../Images/SocialMedia/twitter.svg';
import instagram from '../../Images/SocialMedia/instagram.svg';
import youtube from '../../Images/SocialMedia/youtube.svg';
import patreon from '../../Images/SocialMedia/patreon.svg';

import '../../scss_styles/SocialMedia.scss';

const SocialMedia = () => (
    <div className="SocialMedia-container">
        <SocialMediaIcon image={facebook} link="https://www.facebook.com/wickeditor/" />
        <SocialMediaIcon image={twitter} link="https://twitter.com/wickeditor" />
        <SocialMediaIcon image={instagram} link="https://www.instagram.com/" />
        <SocialMediaIcon image={youtube} link="https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg" />
        <SocialMediaIcon image={patreon} link="https://www.patreon.com/WickEditor" />
    </div>
);

export default SocialMedia;