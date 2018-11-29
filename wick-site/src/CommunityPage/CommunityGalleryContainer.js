/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityGalleryContainer.js

    Container for Grid of user-created content
*/

import React, {Component} from 'react';
import CommunityGallery from './CommunityGallery.js';

class CommunityGalleryContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showGridText: true
        };
    }

    updateTextDisplay = () => {
        var width = window.innerWidth;
        var showGridText = (width >= 768) // coded to match reactstrap cutoffs
        this.setState({showGridText});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateTextDisplay);
        this.updateTextDisplay();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateTextDisplay);
    }

    render() {
        return (
            <CommunityGallery showGridText={this.state.showGridText}/>
        );
    }
}

export default CommunityGalleryContainer;