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
            <ResponsiveEmbed src={embed} ratio="16:9" />
        </ModalBody>
        <ModalFooter />
    </Modal>
);

export default WickCardModal;