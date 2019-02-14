/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContentLinkContainer.js

    Container for Content Link
*/

import React, {Component} from 'react';

import ContentLink from './ContentLink.js';

class ContentLinkContainer extends Component {
    launchLink = () => window.open(this.props.link);

    render() {
        return (
            <ContentLink
                {...this.props}
                onClick={this.launchLink}
            />
        );
    }
};

export default ContentLinkContainer;