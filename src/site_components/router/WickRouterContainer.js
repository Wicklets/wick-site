/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickRouterContainer.js

    Container Component for Navigation Bar for website
    Determines logic for showing/hiding navbar container
*/

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import WickRouter from './WickRouter.js';

class WickRouterContainer extends Component {
    constructor(props) {
        super(props);

        // Website current page
        this.state = {
            backgroundAnimationClass: "WickRouter-background WickRouter-background--hidden",
            isDropdownOpen: false,
            pageJustLaunched: true
        };
    }

    toggleHeaderContainer = () => {
        if (window.scrollY > 48 || this.state.isDropdownOpen) {
            this.setState({
                backgroundAnimationClass: "slideInDown animated WickRouter-background",
                pageJustLaunched: false
            });
        } else if (this.state.pageJustLaunched) {
            this.setState({backgroundAnimationClass: "WickRouter-background WickRouter-background--hidden"});
        } else {
            this.setState({backgroundAnimationClass: "slideOutUp animated WickRouter-background"});
        }
    }

    handleClickCloseDropdown = () => {
        this.setState({isDropdownOpen: false}, this.toggleHeaderContainer);
    }

    toggleDropdown = () => {
        this.setState(prevState => ({isDropdownOpen: !prevState.isDropdownOpen}), this.toggleHeaderContainer);
    }

    launchEditor = () => {
        window.open("https://editor.wickeditor.com", "_self")
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleHeaderContainer);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleHeaderContainer);
    }

    render() {
        return (
            <WickRouter
                page={this.props.location.pathname}
                onClickCloseDropdown={this.handleClickCloseDropdown}
                onClickToggleDropdown={this.toggleDropdown}
                onClickLaunchEditor={this.launchEditor}
                backgroundAnimationClass={this.state.backgroundAnimationClass}
                isDropdownOpen={this.state.isDropdownOpen}
            />
        );
    }
};

export default withRouter(WickRouterContainer);