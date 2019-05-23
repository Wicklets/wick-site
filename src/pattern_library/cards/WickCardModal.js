/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardModal.js

    Component for Card Modals
*/

import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../scss_styles/WickCardModal.scss';

let renderTag = (tag, i) => {
    return (
        <div key={i} className="WickCardModal-tag">{tag}</div>
    )
}

const WickCardModal = ({cardData, onClick, isModalOpen, cardType}) => {
    let embed = cardType === "example" ? ('/examples/'+ cardData.exampleName + "/index.html") : cardData.embed;
    console.log(embed);

    return (
    <Modal
        className="WickCardModal-container"
        isOpen={isModalOpen}
        toggle={onClick}
        size="lg"
    >
        <ModalHeader className="WickCardModal-header">
            <div className="WickCardModal-number">{cardData.number}</div>
            <div className="WickCardModal-underline" />
            <div className="WickCardModal-title">{cardData.title}</div>
        </ModalHeader>
        <ModalBody className="WickCardModal-body">
            <div className="WickCardModal-embed">
                <ResponsiveEmbed src={embed} ratio="16:9" />
            </div>
        </ModalBody>
        <ModalFooter className="WickCardModal-footer">
            <div>
                <div className="WickCardModal-tagContainer">
                    {cardData.tags && cardData.tags.map(renderTag)}
                </div>
                <div className="WickCardModal-time">{cardData.time}</div>
            </div>
            <div className="WickCardModal-description">{cardData.body_extended}</div>
            <button className="WickCardModal-close close" onClick={onClick}>X</button>
        </ModalFooter>
    </Modal>
)};

export default WickCardModal;