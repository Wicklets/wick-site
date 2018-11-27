/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickWorldContainer.js

    Page Header Image Container Component
*/

import React, {Component} from 'react';
import Img from 'react-image';
import wickworld from './wickworld.svg';
import mountainpadding from './mountainpadding.svg';
import forestpadding from './forestpadding.svg';
import './WickWorld.scss';

class WickWorldContainer extends Component {
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
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calculatePaddingImage);
    }

    render() {
        return (
            <Img src={wickworld} className="WickWorld-container"/>
        )
    }
}

export default WickWorldContainer;

