import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './communitymodal.scss'; 

class CommunityModal extends React.Component {
    render () {
        return (
            <Modal
                className="Community-Modal-container"
                isOpen={this.props.isModalOpen}
                toggle={this.props.toggle}
                size="lg"
                >
                <ModalHeader className="Community-Modal-header"> 
                    <button className="Community-Modal-close close" onClick={this.props.toggle}>X</button>
                    <div className="Community-Modal-title">{this.props.project.projectName}</div>
                    <div className="Community-Modal-author">{"by " + this.props.project.author}</div>
                </ModalHeader>
                <ModalBody className="Community-Modal-body">
                    <div className="Community-Modal-embed">
                        <ResponsiveEmbed src={this.props.project.src} ratio="16:9" />
                    </div>
                </ModalBody>
                <ModalFooter className="Community-Modal-footer">
                    <div className="Community-Modal-infoContainer">
                        <div className="Community-Modal-description">{this.props.project.description}</div>
                        {this.props.project.instructions && <div className="Community-Modal-instructions">{this.props.project.instructions}</div>}
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
} 

export default CommunityModal;