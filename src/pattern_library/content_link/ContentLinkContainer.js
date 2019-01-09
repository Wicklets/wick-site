/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContentLinkContainer.js

    Container for Content Link
*/

import React, {Component} from 'react';

import ContentLink from './ContentLink.js';

class ContentLinkContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isContentHovered: false
        };
    }

    toggleContent = () => this.setState(prevState => ({isContentHovered: !prevState.isContentHovered}));

    launchLink = () => window.open(this.props.link);

    render() {
        return (
            <ContentLink
                {...this.props}
                onClick={this.launchLink}
                toggleContent={this.toggleContent}
                isContentHovered={this.state.isContentHovered}/>
        );
    }
};

export default ContentLinkContainer;