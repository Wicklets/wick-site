/*
    Alex Yixuan Xu (ayxx@nyu.edu)
    WickEditor Website
    DownloadCard.js

    Component for Download Card
*/

import React from 'react';
import {Card, CardBody} from 'reactstrap';
import WickButton from '../../pattern_library/button/WickButton.js'

import './DownloadCard.scss';

const DownloadCard = ({icon, iconAlt, title, text, buttonText, buttonImg, buttonImgAlt, onClickLink, isMobileView}) => (
    (buttonImg) ?
    <Card className={(isMobileView) ? "DownloadCard-container-mobile" : "DownloadCard-container"}>
        <CardBody>
            <div className={(isMobileView) ? "DownloadCard-title-mobile" : "DownloadCard-title"}>
                <img src={icon} alt={iconAlt} className={(isMobileView) ? "DownloadCard-titleIcon-mobile" : "DownloadCard-titleIcon"}></img>
                <div className={(isMobileView) ? "DownloadCard-titleText-mobile" : "DownloadCard-titleText"}>{title}</div>
            </div>
            <p className="DownloadCard-text">{text}</p>
            <img src={buttonImg} alt={buttonImgAlt} onClick={() => window.open(onClickLink)} className={(isMobileView) ? "DownloadCard-buttonImg-mobile" : "DownloadCard-buttonImg"}></img>
        </CardBody>
    </Card>:

    <Card className="DownloadCard-container">
        <CardBody>
            <div className="DownloadCard-title">
                <img src={icon} alt={iconAlt} className="DownloadCard-titleIcon"></img>
                <div className="DownloadCard-titleText">{title}</div>
            </div>
            <p className="DownloadCard-text">{text}</p>
            <WickButton text={buttonText} size="lg" block type="smallDownload" onClick={() => window.open(onClickLink)} className="DownloadCard-button"/>
        </CardBody>
    </Card>
);

export default DownloadCard;