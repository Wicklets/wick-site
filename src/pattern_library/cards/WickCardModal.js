/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardModal.js

    Component for Card Modals
*/

import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { saveAs } from 'file-saver';
import WickButton from '../button/WickButton';

import '../../scss_styles/WickCardModal.scss';

let renderTag = (tag, i) => {
    return (
        <div key={i} className="WickCardModal-tag">{tag}</div>
    )
}

let downloadLink = (link, fileName) => {
    let url = process.env.PUBLIC_URL + link;

    // ES6
    fetch(url)
    .then(res => res.blob())
    .then(blob => saveAs(blob, fileName))
    .catch(error => {console.error(error)});
}

const WickCardModal = ({cardData, onClick, isModalOpen, cardType}) => {
    let embed = cardType === "example" ? ('/examples/'+ cardData.exampleName + "/index.html") : cardData.embed;
    let download = cardType === "example" ? ('/examples/' + cardData.exampleName + '.wick') : null;

    return (
    <Modal
        role="dialog"
        aria-modal="true"
        className="WickCardModal-container"
        isOpen={isModalOpen}
        toggle={onClick}
        size="lg"
    >
        <ModalHeader className="WickCardModal-header"> 
            <div className="WickCardModal-number">{cardData.number}</div>
            <div className="WickCardModal-underline" />
            <div className="WickCardModal-title">{cardData.title}</div>
            <button className="WickCardModal-close close" onClick={onClick}>X</button>
        </ModalHeader>
        <ModalBody className="WickCardModal-body">
            <div className="WickCardModal-embed">
                <ResponsiveEmbed tabindex="0" src={embed} ratio="16:9" />
            </div>
        </ModalBody>
        <ModalFooter className="WickCardModal-footer">
            <div className="WickCardModal-infoContainer">
                <div>
                    <div className="WickCardModal-tagContainer">
                        {cardData.tags && cardData.tags.map(renderTag)}
                    </div>
                    <div className="WickCardModal-time">{cardData.time}</div>
                </div>
                <div className="WickCardModal-description">{cardData.body_extended}</div>
            </div>
            {download && <WickButton
            text="Download Example"
            className="WickCardModal-download"
            onClick={() => {downloadLink(download, cardData.exampleName + '.wick')}}/>}
        </ModalFooter>
    </Modal>
)};

export default WickCardModal;
