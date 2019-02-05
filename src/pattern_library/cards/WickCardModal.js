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

const WickCardModal = ({title, onClick, modalOpen}) => (
    <Modal
        className="WickCardModal-container"
        isOpen={modalOpen}
        toggle={onClick}
        size="lg"
    >
        <ModalHeader className="WickCardModal-header">
            <div className="WickCardModal-number">Tutorial #</div>
            <div className="WickCardModal-underline" />
            <div className="WickCardModal-title">{title}</div>
        </ModalHeader>
        <ModalBody>
            <ResponsiveEmbed src="https://www.youtube.com/embed/IpF8fMXN6To" ratio="16:9" />
        </ModalBody>
        <ModalFooter />
    </Modal>
);

export default WickCardModal;