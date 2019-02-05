/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCard.js

    Component for Cards
*/

import React, { Fragment } from 'react';
import Img from 'react-image';
import ResponsiveEmbed from 'react-responsive-embed';

import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import arrow from '../../Images/Tutorials/arrow.svg';

import '../../scss_styles/WickCard.scss';

const WickCard = ({title, body, image, onClick, includeModal, modalOpen, onMouseEnter, onMouseLeave, isContentHovered}) => (
    <Fragment>
        <Card className="WickCard-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <CardImg width="100%" src={image} alt="Card image cap" />
            <CardImgOverlay className="WickCard-content">
                <CardTitle className={isContentHovered ? "WickCard-title" : "WickCard-title WickCard-title--collapsed"}>{title}</CardTitle>
                {isContentHovered && (
                    <Fragment>
                        <CardText className="WickCard-text">{body}</CardText>
                        <Img src={arrow} />
                    </Fragment>
                )}
            </CardImgOverlay>
        </Card>
        {includeModal && (
            <Modal
                className="WickCard-modal"
                isOpen={modalOpen}
                toggle={onClick}
                size="lg"
            >
                <ModalHeader className="WickCard-modalHeader">
                    <div className="WickCard-modalNumber">Tutorial #</div>
                    <div className="WickCard-modalUnderline" />
                    <div className="WickCard-modalTitle">{title}</div>
                </ModalHeader>
                <ModalBody>
                    <ResponsiveEmbed src="https://www.youtube.com/embed/IpF8fMXN6To" ratio="16:9" />
                </ModalBody>
                <ModalFooter />
            </Modal>
        )}
    </Fragment>
);

export default WickCard;