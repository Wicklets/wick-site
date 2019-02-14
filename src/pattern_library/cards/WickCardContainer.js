/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardContainer.js

    Container for Cards
*/

import React, { Fragment, Component } from 'react';

import ExampleCard from './ExampleCard.js';
import NewsCard from './NewsCard.js';
import TutorialCard from './TutorialCard.js';

class WickCardContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isModalOpen: false
        };
    }

    handleClick = () => (this.props.disabled ?
        {} :
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen})));

    render() {
        return (
            <Fragment>
                {this.props.type === "news" && (
                    <NewsCard
                        {...this.props}
                        {...this.state}
                        onClick={this.handleClick}
                    />
                )}
                {this.props.type === "example" && (
                    <ExampleCard
                        {...this.props}
                        {...this.state}
                        onClick={this.handleClick}
                    />
                )}
                {this.props.type === "tutorial" && (
                    <TutorialCard
                        {...this.props}
                        {...this.state}
                        onClick={this.handleClick}
                    />
                )}
            </Fragment>
        );
    }
};

export default WickCardContainer;

