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
        <ModalBody>
            <div className="WickCardModal-embed">
                <ResponsiveEmbed src={embed} ratio="16:9" />
            </div>
        </ModalBody>
        <ModalFooter className="WickCardModal-footer">
            <div className="WickCardModal-tag">#tag1</div>
            <div className="WickCardModal-tag">#tag2</div>
            <div className="WickCardModal-tag">#tag3</div>
            <div className="WickCardModal-description">Here is a tutorial to help you get started with the Wick Editor. Here is a tutorial to help you get started with the Wick Editor. Here is a tutorial to help you get started with the Wick Editor. Here is a tutorial to help you get started with the Wick Editor. </div>
        </ModalFooter>
    </Modal>
);

export default WickCardModal;