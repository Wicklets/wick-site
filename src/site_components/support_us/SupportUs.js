/*
    Alex Yixuan Xu (ayxx@nyu.edu)
    WickEditor Website
    SupportUs.js

    a fixed support us modal for website
*/

import React, {Component, Fragment} from 'react';
import {Modal} from 'reactstrap';
import Img from 'react-image';
import ProgressBar from './ProgressBar.js'

import {supportData} from '../../data/SiteData.js';

import flashy from '../../Images/SupportUs/flashy.png';
import githubHeart from '../../Images/SupportUs/github-heart.svg';
import githubLogoBlack from '../../Images/SupportUs/github-logo-black.svg';
import patreonLogoBlack from '../../Images/SupportUs/patreon-logo-black.svg';
import patreonLogoWhite from '../../Images/SupportUs/patreon-logo-white.svg';

import './SupportUs.scss';

class SupportUs extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            open: false //open: (window.innerWidth <= 768) ? false : true
        }

        this.togglePanel = this.togglePanel.bind(this);
        this.progressData = supportData;
    }

    togglePanel = (e) => {
        this.setState({
            open: !this.state.open
        })
    } 

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
      
    handleWindowSizeChange = () => {
        this.setState({ 
            width: window.innerWidth
            //open: (window.innerWidth <= 768) ? false : true 
        });
    };
      

    render() {
        //const isMobile = window.innerWidth <= 768;

        let modalContent = [<Modal className="support-us-modal-open"  isOpen={this.state.open}>
                                <div id="ghost-image-modal">
                                    <Img src={flashy} alt="wick friendly ghost image"/>
                                </div>
                                <div className="support-us-modal">
                                    <div class="support-us-header">
                                        <p class="support-us-text-modal">Support Us <span role="img" aria-label="celebrations emoji">🎉</span></p>
                                        <button class="support-us-close" onClick={(e)=>this.togglePanel(e)}>{"X"}</button>
                                    </div>
                                    <div class="support-us-content-modal">
                                    <div class="support-us-title"><Img class="support-us-title-icon" src={patreonLogoBlack} alt="black patreon logo"/><p class="support-us-title-text">Patreon</p></div>
                                        <ProgressBar percent={this.progressData.patreonProgress/this.progressData.patreonGoal*100} type="patreon"></ProgressBar>
                                        <p class="support-us-progress-text">{'$'+this.progressData.patreonProgress+' of $'+this.progressData.patreonGoal+' per month'}</p>
                                        <button class="patreon-button" onClick={function(){window.open("https://www.patreon.com/WickEditor", "_blank")}}><Img class="support-button-img" src={patreonLogoWhite} alt="white patreon logo"/>Become a Patron</button>

                                        <div class="support-us-title"><Img class="support-us-title-icon" src={githubLogoBlack} alt="black github logo"/><p class="support-us-title-text">GitHub Sponsors</p></div>
                                        <ProgressBar percent={this.progressData.githubProgress/this.progressData.githubGoal*100} type="github"></ProgressBar>
                                        <p class="support-us-progress-text">{this.progressData.githubProgress+' of '+this.progressData.githubGoal+' sponsors found'}</p>
                                        <button class="github-button" onClick={function(){window.open("https://github.com/sponsors/Wicklets", "_blank")}}><Img class="support-button-img" src={githubHeart} alt="pink heart icon"/>Sponsor</button>
                                    </div>
                                </div>
                            </Modal>]

            return (
                <Fragment class="support-us-wrapper">
                    {modalContent}
                    {!this.state.open && <button class="support-us-button" onClick={(e)=>this.togglePanel(e)}>Support Us <span role="img" aria-label="celebrations emoji">🎉</span></button>}
                </Fragment>
            );
    }
};

export default SupportUs;