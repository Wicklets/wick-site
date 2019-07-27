import React from 'react';

import CommunityModal from '../CommunityModal/CommunityModal';

import './communityprojectbutton.scss';

class CommunityProjectButton extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            modalOpen : false,
        }
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }

    render () {
        let project = this.props.project
        return (
            <div className="community-project-button" onClick={this.toggle}>
                <div className="project-button-overlay" />
                <div className="project-preview-image-container">
                    <img className="project-preview-image-background" src={project.projectImage} />
                    <img className="project-preview-image-foreground" src={project.projectImage} />
                </div>
                <div className="project-description-container">
                    <div className="project-text project-title">{project.projectName}</div>
                    <div className="project-text project-author">{"by " + project.author}</div>
                    <div className="project-text project-description">{project.description}</div>
                </div>

                <CommunityModal 
                    project={project}
                    toggle={this.toggle}
                    isModalOpen={this.state.modalOpen} />
            </div>
        )
    }
}

export default CommunityProjectButton