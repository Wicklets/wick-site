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
import youtube from '../../Images/SocialMedia/youtube.svg';
import youtubedark from '../../Images/SocialMedia/youtube_dark.svg';
import patreon from '../../Images/SocialMedia/patreon.svg';
import patreondark from '../../Images/SocialMedia/patreon_dark.svg';

import '../../scss_styles/SocialMedia.scss';

const SocialMedia = () => (
    <div className="SocialMedia-container">
        <SocialMediaIcon image={facebook} highlight={facebookdark} link="https://www.facebook.com/wickeditor/" />
        <SocialMediaIcon image={twitter} highlight={twitterdark} link="https://twitter.com/wickeditor" />
        <SocialMediaIcon image={instagram} highlight={instagramdark} link="https://www.instagram.com/" />
        <SocialMediaIcon image={youtube} highlight={youtubedark} link="https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg" />
        <SocialMediaIcon image={patreon} highlight={patreondark} link="https://www.patreon.com/WickEditor" />
    </div>
);

export default SocialMedia;