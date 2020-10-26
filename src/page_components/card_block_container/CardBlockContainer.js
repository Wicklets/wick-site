/*
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Example Card Block
*/

import React, { Fragment, Component } from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';
import ToggleButton from '../../pattern_library/button/toggle_button.js';

import '../../scss_styles/LearnPageFilter.scss';

class CardBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            toggledTags: [],
            numberCards: 3,
            numberRows: 1,

        };

        this.tags = this.props.tags || [];
        this.cards = this.props.cards || [];
    }

    toggleTag = (tag) => {

        if (this.state.toggledTags.indexOf(tag) > -1) {
            // Remove the tag
            this.setState({
                toggledTags: this.state.toggledTags.filter(oldTag => oldTag !== tag)
            })
        } else {
            // Add the tag.
            this.setState({
                toggledTags: this.state.toggledTags.concat([tag])
            })
        }
    }

    updateFilter = (text) => {
        this.setState({
          filterText: text.target.value,
        });
    }

    cardContainsTag = (cardData, tag) => {
        tag = tag.toLowerCase();

        return ( 
            cardData.title.toLowerCase().includes(tag) ||
            cardData.body.toLowerCase().includes(tag) ||
            cardData.tags.map(cardTag => cardTag.toLowerCase()).indexOf(tag) > -1
        );
    }

    filterCardsByTags = (cardDataArray) => {

        if (this.state.toggledTags.length === 0) return cardDataArray; // Return everything if no tags are selected.

        let filteredData = cardDataArray.filter(cardData => {

            for (let tag of this.state.toggledTags) {
                if (this.cardContainsTag(cardData, tag)) {
                    return true;
                }
            }

            return false;
        });

        return filteredData;
    }
    
    filterCardsByFilter = (cardDataArray) => {

        if (this.state.filterText === '') return cardDataArray;
        
        let filteredData = cardDataArray.filter(cardData => {
            return this.cardContainsTag(cardData, this.state.filterText);
        });

        return filteredData;
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // coded to match reactstrap cutoff
        var numberRows = Math.ceil(this.cards.length / numberCards)
        this.setState({numberCards, numberRows});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateNumberCards);
        this.updateNumberCards();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNumberCards);
    }

    render() {

        let filteredCards = this.filterCardsByTags(this.cards);
        filteredCards = this.filterCardsByFilter(filteredCards);

        let displayContent;

        if (filteredCards.length <= 0) {
            displayContent = <p className="guide-text">Can't find an example? Visit our Community Forum below to request a new example!</p>
        }

        else {
            displayContent = ([...Array(this.state.numberRows).keys()]).map(rowInd => (
                <WickCardDeckContainer
                    key={rowInd}
                    cards={filteredCards.slice(this.state.numberCards*rowInd, this.state.numberCards*(rowInd + 1))}
                    type="example"
                    usePadding
                />
            ))
        }

        return (
            <Fragment>
                <input 
                    className="wick-filter"
                    aria-label="filter"
                    type="text" 
                    placeholder="Filter..." 
                    value={this.state.filterText} 
                    onChange={this.updateFilter}>
                </input>

                <br />

                <div className="tags-group">
                    {
                    this.tags.map((tag) => <ToggleButton 
                        tag={tag} 
                        toggle={() => this.toggleTag(tag)} 
                        toggled={this.state.toggledTags.indexOf(tag) > -1}
                        key={"tag-" + tag}/>)
                    }
                </div>
                {displayContent}
            </Fragment>
        );
    }
};

export default CardBlockContainer;