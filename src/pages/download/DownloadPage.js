/*
    Alex Yixuan Xu (ayxx@nyu.edu)
    WickEditor Website
    DownloadPage.js

    Top-Level Content for the Wick Download Page
*/

import React from 'react';

import { Container, Row, Col} from 'reactstrap';
import { Helmet } from 'react-helmet';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import { WickLargeSpacer, WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import DownloadCard from './DownloadCard.js';
import InlineLink from '../../pattern_library/inline_link/WickInlineLink.js';
import {isMobile, isAndroid, isIOS} from "react-device-detect";

import windowsIcon from '../../Images/Download/windows.svg';
import appleIcon from '../../Images/Download/apple.svg';
import linuxIcon from '../../Images/Download/linux.svg';
import androidIcon from '../../Images/Download/android.svg';
import appStoreBadge from '../../Images/Download/app-store-badge.svg';
import googlePlayBadge from '../../Images/Download/google-play-badge.svg';

const DownloadPage = () => (
    // mobile version android or IOS
    (isMobile && (isAndroid || isIOS)) ?
    <Container className="fadeIn animated">
        <Helmet>
            <title>The Wick Editor</title>
            <meta name="description" content="The Wick Editor: Make games, animations, and everything in-between." />
        </Helmet>
        <DownloadCard 
            // icon={(isIOS)? appleIcon : androidIcon} 
            // iconAlt={(isIOS)? "Apple Logo" : "Android Logo"}
            title={(isIOS)? "Download Wick Editor 1.18 for IOS" : "Download Wick Editor 1.18 for Android"}
            buttonImg={(isIOS) ? appStoreBadge : googlePlayBadge}
            buttonImgAlt={(isIOS) ? "Download on the App Store" : "Get it on Google Play"}
            isMobileView="true"
            //onClickLink=""
        />
        <Row><p></p></Row>
        <p style={{font: "400 16px 'Nunito', sans-serif", maxWidth: "855px", margin: "0 auto"}}>The offline versions of the Wick Editor are currently in Beta. If you encounter an issue or have any questions, 
            please <InlineLink text="contact us in the forum" link="https://forum.wickeditor.com/" /></p>
        <Row><p></p></Row>
        <p style={{font: "400 16px 'Nunito', sans-serif", maxWidth: "855px", margin: "0 auto"}}>If you are looking for the source code or an older version of the Wick Editor, please 
        visit <InlineLink text="our GitHub" link="https://github.com/Wicklets/wick-editor/releases" />.</p>
        <WickSmallSpacer />
        <p style={{font: "600 20px 'Nunito', sans-serif", maxWidth: "855px", margin: "0 auto"}}>Note: The Wick Editor is a free and open-source software. 
            To avoid scam, please only download The Wick Editor from 
            our <InlineLink text="official site" link="https://www.wickeditor.com/#/"></InlineLink> or 
            our <InlineLink text="GitHub" link="https://github.com/Wicklets/wick-editor"></InlineLink>.</p>
        <WickLargeSpacer />

    </Container>
    : // all other versions
    <Container className="fadeIn animated">
        <Helmet>
            <title>The Wick Editor</title>
            <meta name="description" content="The Wick Editor: Make games, animations, and everything in-between." />
        </Helmet>

        <Row><p></p></Row>

        <ContentSection
            title="Desktop"
            size="small"
            includeUnderline
        >
            {/* icon, iconAlt, title, text, buttonText, buttonImg, buttonImgAlt, onClick */}
            <Row style={{maxWidth: "855px", margin: "0 auto"}}>
                <Col xs="12" s="12" md="6" lg="4">
                    <DownloadCard 
                    icon={windowsIcon} iconAlt="Windows Logo" 
                    title="Windows" text="For Windows 8 and above"
                    buttonText="Download .exe"
                    onClickLink="https://github.com/Wicklets/wick-editor/releases/download/v1.18.0-prerelease/Wick.Editor.Setup.1.18.0.exe"
                    />
                </Col>
                <Col xs="12" s="12" md="6" lg="4">
                    <DownloadCard 
                    icon={appleIcon} iconAlt="Apple Logo" 
                    title="macOS" text="For macOSX and above"
                    buttonText="Download .pkg" 
                    onClickLink="https://github.com/Wicklets/wick-editor/releases/download/v1.18.0-prerelease/Wick.Editor-1.18.0_signed.pkg"
                    />
                </Col>
                <Col xs="12" s="12" md="6" lg="4">
                    <DownloadCard 
                    icon={linuxIcon} iconAlt="Linux Logo" 
                    title="Linux" text="For Linux ... and above"
                    buttonText="Download AppImage" 
                    onClickLink="https://github.com/Wicklets/wick-editor/releases/download/v1.18.0-prerelease/Wick.Editor-1.18.0.AppImage"
                    />
                </Col>
            </Row>
        </ContentSection>

        <WickSmallSpacer />
        
        <ContentSection
            title="Mobile"
            size="small"
            includeUnderline
        >
            {/* icon, iconAlt, title, text, buttonText, buttonImg, buttonImgAlt, onClick */}
            <Row style={{maxWidth: "855px", margin: "0 auto"}}>
                <Col xs="12" s="12" md="6" lg={{ size: 4, offset: 2 }}>
                    <DownloadCard 
                    icon={androidIcon} iconAlt="Android Logo" 
                    title="Android" text="For Android ... and above"
                    buttonImg={googlePlayBadge}
                    buttonImgAlt="Get it on Google Play"
                    // onClickLink=
                    />
                </Col>
                <Col xs="12" s="12" md="6" lg={{ size: 4 }}>
                    <DownloadCard 
                    icon={appleIcon} iconAlt="Apple Logo" 
                    title="IOS" text="For IOS ... and above"
                    buttonImg={appStoreBadge} 
                    buttonImgAlt="Get it on App Store"
                    // onClickLink=
                    />
                </Col>
            </Row>
        </ContentSection>

        <WickSmallSpacer />
        <p style={{font: "400 16px 'Nunito', sans-serif", maxWidth: "855px", margin: "0 auto"}}>If you are looking for the source code or an older version of the Wick Editor, please 
        visit <InlineLink text="our GitHub" link="https://github.com/Wicklets/wick-editor/releases" />.</p>

        <WickSmallSpacer />

        <p style={{font: "600 20px 'Nunito', sans-serif", maxWidth: "855px", margin: "0 auto"}}>Note: The Wick Editor is a free and open-source software. 
            To avoid scam, please only download The Wick Editor from 
            our <InlineLink text="official site" link="https://www.wickeditor.com/#/"></InlineLink> or 
            our <InlineLink text="GitHub" link="https://github.com/Wicklets/wick-editor"></InlineLink>.</p>

        <WickLargeSpacer />

    </Container>
);

export default DownloadPage;
