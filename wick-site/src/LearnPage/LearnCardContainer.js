/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnCardContainer.js

    Container component to display examples/tutorials on the learn page
*/

import React, {Component} from 'react';
import LearnCard from './LearnCard.js';

class LearnCardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useButtonRow: false,
            displayContent: false,
            overlayDisplayClass: ""
        };
    }

    updateButtonDisplay = () => {
        var width = window.innerWidth;
        var useButtonRow = (width < 768) // code to match reactstrap cutoffs
        this.setState({useButtonRow});
    }

    toggleDisplayContent = () => {
        this.setState(prevState => ({displayContent: !prevState.displayContent}));
    }

    showOverlay = () => this.setState({overlayDisplayClass: "fadeIn animated faster LearnCard-overlay"});
    hideOverlay = () => this.setState({overlayDisplayClass: "fadeOut animated faster LearnCard-overlay"});

    componentDidMount() {
        window.addEventListener('resize', this.updateButtonDisplay);
        this.updateButtonDisplay();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateButtonDisplay);
    }

    render() {
        return (
            <LearnCard
                {...this.props}
                useButtonRow={this.state.useButtonRow}
                displayContent={this.state.displayContent}
                toggleDisplayContent={this.toggleDisplayContent}
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                overlayDisplayClass={this.state.overlayDisplayClass}
            />
        );
    }
}

export default LearnCardContainer;