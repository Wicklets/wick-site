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

    showContent = () => this.setState({isContentHovered: true});

    hideContent = () => this.setState({isContentHovered: false});

    launchLink = () => window.open(this.props.link);

    render() {
        return (
            <ContentLink
                {...this.props}
                onClick={this.launchLink}
                showContent={this.showContent}
                hideContent={this.hideContent}
                isContentHovered={this.state.isContentHovered}/>
        );
    }
};

export default ContentLinkContainer;