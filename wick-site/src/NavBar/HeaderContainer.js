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
            isBackgroundHidden: true,
            isDropdownOpen: false
        };
    }

    toggleHeaderContainer = () => {
        if (window.scrollY > 48) {
            this.setState({isBackgroundHidden: false});
        } else {
            this.setState({isBackgroundHidden: true});
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
                isBackgroundHidden={this.state.isBackgroundHidden}
                isDropdownOpen={this.state.isDropdownOpen}
            />
        );
    }
};

export default HeaderContainer;