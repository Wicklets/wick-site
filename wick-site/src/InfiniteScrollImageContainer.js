/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    InfiniteScrollImageContainer.js

    Header and Footer Image Container Component
*/

import React, {Component} from 'react';
import InfiniteScrollImage from './InfiniteScrollImage.js';

class InfiniteScrollImageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paddingImage: 0
        };
    };

    calculatePaddingImage = () => {
        var width = window.innerWidth;
        var worldWidth = 1024 // coded based off width of main image
        var paddingWidth = 120 // coded based off width of padding images
        this.setState({
            paddingImage: Math.max(0, Math.ceil((width - worldWidth) / (2 * paddingWidth)))
        })
    };

    componentDidMount() {
        window.addEventListener('resize', this.calculatePaddingImage);
        this.calculatePaddingImage();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calculatePaddingImage);
    }

    render() {
        return (
            <InfiniteScrollImage
                {...this.props}
                numberPadding={this.state.paddingImage}
            />
        )
    }
}

export default InfiniteScrollImageContainer;

