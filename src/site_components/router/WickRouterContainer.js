/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickRouterContainer.js

    Container Component for Navigation Bar for website
    Determines logic for showing/hiding navbar container
*/

import React, {Component} from 'react';

import WickRouter from './WickRouter.js';

class WickRouterContainer extends Component {
    constructor(props) {
        super(props);

        // Website current page
        this.state = {
            backgroundAnimationClass: "WickRouter-background WickRouter-background--hidden",
            isDropdownOpen: false,
            pageJustLaunched: true,
            page: "home"
        };
    }

    toggleHeaderContainer = () => {
        if (window.scrollY > 48) {
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

    handleClickChangePage = (page) => {
        this.setState({isDropdownOpen: false, page});
    }

    toggleDropdown = e => {
        this.setState({isDropdownOpen: !this.state.isDropdownOpen});
    }

    launchEditor = () => {
        window.open("http://wickeditor.com/wick-editor/", "_self")
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
                page={this.state.page}
                onClickChangePage={this.handleClickChangePage}
                onClickToggleDropdown={this.toggleDropdown}
                onClickLaunchEditor={this.launchEditor}
                backgroundAnimationClass={this.state.backgroundAnimationClass}
                isDropdownOpen={this.state.isDropdownOpen}
            />
        );
    }
};

export default WickRouterContainer;