import React from 'react';
import CommunityProjectButton from '../CommunityProjectButton/CommunityProjectButton';

import './communityprojectboard.scss';

class CommunityProjectBoard extends React.Component {
    render () {
        return (
            <div className="community-project-board">
                <CommunityProjectButton project={this.props.projects[0]}/>
                <CommunityProjectButton project={this.props.projects[1]}/>
                <CommunityProjectButton project={this.props.projects[2]}/>
                <CommunityProjectButton project={this.props.projects[3]}/>
                <CommunityProjectButton project={this.props.projects[4]}/>
            </div>
        )
    }
}

export default CommunityProjectBoard