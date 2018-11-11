/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

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
            hide: true
        };
    }

    toggleHeaderContainer = e => {
        if (window.scrollY > 48) {
            this.setState({hide: false});
        } else {
            this.setState({hide: true});
        }
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
                hide={this.state.hide}
            />
        );
    }
};

export default HeaderContainer;