/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCardContainer.js

    Container for Cards
*/

import React, { Fragment, Component } from 'react';

import ExampleCard from './ExampleCard.js';
import NewsCard from './NewsCard.js';

class WickCardContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isContentHovered: false,
            isModalOpen: false
        };
    }

    handleMouseEnter = () => (this.props.disabled ?
        {} :
        this.setState({isContentHovered: true}));

    handleMouseLeave = () => (this.props.disabled ?
        {} :
        this.setState({isContentHovered: false}));

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
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                )}
                {this.props.type === "example" && (
                    <ExampleCard
                        {...this.props}
                        {...this.state}
                        onClick={this.handleClick}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                )}
                {this.props.type === "tutorial" && (
                    <ExampleCard
                        {...this.props}
                        {...this.state}
                        onClick={this.handleClick}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                )}
            </Fragment>
        );
    }
};

export default WickCardContainer;

