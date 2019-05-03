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

const WickCardModal = ({title, embed, number, onClick, isModalOpen}) => (
    <Modal
        className="WickCardModal-container"
        isOpen={isModalOpen}
        toggle={onClick}
        size="lg"
    >
        <ModalHeader className="WickCardModal-header">
            <div className="WickCardModal-number">{number}</div>
            <div className="WickCardModal-underline" />
            <div className="WickCardModal-title">{title}</div>
        </ModalHeader>
        <ModalBody className="WickCardModal-body">
            <div className="WickCardModal-embed">
                <ResponsiveEmbed src={embed} ratio="16:9" />
            </div>
        </ModalBody>
        <ModalFooter className="WickCardModal-footer">
            <div>
                <div className="WickCardModal-tagContainer">
                    <div className="WickCardModal-tag">#tag1</div>
                    <div className="WickCardModal-tag">#tag2</div>
                    <div className="WickCardModal-tag">#tag3</div>
                </div>
                <div className="WickCardModal-time">7 Mins</div>
            </div>
            <div className="WickCardModal-description">Here is a tutorial to help you get started with the Wick Editor. Here is a tutorial to help you get started with the Wick Editor. Here is a tutorial to help you get started with the Wick Editor. Here is a tutorial to help you get started with the Wick Editor. </div>
            <button className="WickCardModal-close close" onClick={onClick}>X</button>
        </ModalFooter>
    </Modal>
);

export default WickCardModal;