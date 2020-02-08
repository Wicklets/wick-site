import React from 'react';
import CommunityProjectButton from '../CommunityProjectButton/CommunityProjectButton';

import './communityprojectboard.scss';

class CommunityProjectBoard extends React.Component {
    render () {
        return (
            <div className="community-project-board">
                {this.props.projects.map((project, i) => {
                    return (<CommunityProjectButton project={project}/>); 
                    })
                }
            </div>
        )
    }
}

export default CommunityProjectBoard