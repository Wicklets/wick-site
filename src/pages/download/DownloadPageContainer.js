/*
    Alex Yixuan Xu (ayxx@nyu.edu)
    WickEditor Website
    DownloadPageContainer.js

    Container for the Wick Download Page
*/

import React, {Component, Fragment} from 'react';
import {isMobile, isAndroid, isIOS, isWindows, isMacOs} from "react-device-detect";

import DownloadPage from './DownloadPage.js';
import Header from '../../site_components/header/Header.js';
import InlineLink from '../../pattern_library/inline_link/WickInlineLink.js';

import ReactGA from 'react-ga'; 

import windowsIcon from '../../Images/Download/windows.svg';
import appleIcon from '../../Images/Download/apple.svg';
import linuxIcon from '../../Images/Download/linux.svg';


class DownloadPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowSize: window.innerWidth,
            buttonIcon: (isWindows) ? windowsIcon : (isMacOs) ? appleIcon : linuxIcon,
            buttonIconAlt: (isWindows) ? "Windows Logo" : (isMacOs) ? "Apple Logo" : "Linux Logo",
            downloadButtonType: (isWindows) ? "Windows" : (isMacOs) ? "macOS" : "Linux",
            downloadButtonLink: (isWindows) ? "https://github.com/Wicklets/wick-editor/releases/download/v1.18.0-prerelease/Wick.Editor.Setup.1.18.0.exe" 
                                            : (isMacOs) ? "https://github.com/Wicklets/wick-editor/releases/download/v1.18.0-prerelease/Wick.Editor-1.18.0_signed.pkg" 
                                            : "https://github.com/Wicklets/wick-editor/releases/download/v1.18.0-prerelease/Wick.Editor-1.18.0.AppImage"
        };
    }

    getWindowSize = () => {this.setState({windowSize: window.innerWidth})};

    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: 'smooth'})
        window.addEventListener('resize', this.getWindowSize);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.getWindowSize);
    }

    render() {
        ReactGA.pageview("/");

        let title = "download";
        let tagline = "download an offline version of the wick editor for your devices.";

        // if android or IOS
        if (isMobile && (isAndroid || isIOS)){
            return (
                <Fragment>
                    <Header
                        title={title}
                        tagline={tagline}
                    />
                    <DownloadPage />
                </Fragment>
            );
        }
        // else (browser or systems that are not android or ios)
        else {
            return (
                <Fragment>
                    <Header
                        title={title}
                        tagline={tagline}
                        
                        buttonIcon={this.state.buttonIcon}
                        buttonIconAlt={this.state.buttonIconAlt}
                        downloadButtonType={this.state.downloadButtonType}
                        buttonLabel="Download Wick Editor"
                        buttonSub={<Fragment>The offline versions of the Wick Editor are currently in Beta. If you encounter an issue or have any questions, 
                            please <InlineLink text="contact us in the forum" link="https://forum.wickeditor.com/" />.</Fragment>}
                        onClick={() => window.open(this.state.downloadButtonLink)}
                    />
                    <DownloadPage />
                </Fragment>
            );
        }
    }
};

export default DownloadPageContainer;
