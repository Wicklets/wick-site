/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HeaderContainer.js

    Container Component for Navigation Bar for website
    Determines logic for showing/hiding navbar container
*/

import React, {Component} from 'react';

import Header from './Header.js';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        // Website current page
        this.state = {
            backgroundAnimationClass: "",
            isDropdownOpen: false,
            pageJustLaunched: true
        };
    }

    toggleHeaderContainer = () => {
        if (window.scrollY > 48) {
            this.setState({
                backgroundAnimationClass: "slideInDown animated Header-background",
                pageJustLaunched: false
            });
        } else if (this.state.pageJustLaunched) {
            this.setState({backgroundAnimationClass: ""});
        } else {
            this.setState({backgroundAnimationClass: "slideOutUp animated Header-background"});
        }
    }

    handleClickChangePage = (page) => {
        this.setState({isDropdownOpen: false});
        this.props.onClickChangePage(page);
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
            <Header
                {...this.props}
                onClickChangePage={this.handleClickChangePage}
                onClickToggleDropdown={this.toggleDropdown}
                onClickLaunchEditor={this.launchEditor}
                backgroundAnimationClass={this.state.backgroundAnimationClass}
                isDropdownOpen={this.state.isDropdownOpen}
            />
        );
    }
};

export default HeaderContainer;