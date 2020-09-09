/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Tutorial Card Block

    Edited by Alex Yixuan Xu (ayxx@nyu.edu)
*/

import React, { Fragment, Component } from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';
import ToggleButton from '../../pattern_library/button/toggle_button.js';

import { tutorials } from '../../data/SiteData.js';

import '../../scss_styles/LearnPageFilter.scss';

class TutorialCardBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            tags: ["Beginner", "Intermediate", "Legacy",
            "Animation", "Games", "Interactive",
            "Text", "Buttons", "Sound", "Mouse", "Images", "Keyboard",
            "Tools", "Canvas", "Timeline"],
            toggledTags: [],

            numberCards: 3,
            numberRows: 1,
            cards: tutorials
        };
    }
    
    updateFilter = (text) => {
        this.setState({
          filterText: text.target.value,
          toggledTags: []
        });
    }

    updateTags = (e) => {
        //let currentToggledTags = this.state.toggledTags;
        // if before click button is off, add tag to toggled tags
        if (e.target.outerHTML.includes("toggle-button-off")){
            if (!this.state.toggledTags.includes(e.target.innerHTML)){
                //this.setState({
                    this.state.toggledTags.push(e.target.innerHTML);
                //});
            }  
        }
        // if before click button is on, remove tag from toggled tags
        else if (e.target.outerHTML.includes("toggle-button-on")){
            //this.setState({
                this.state.toggledTags = this.state.toggledTags.filter(toggledTag => toggledTag !==e.target.innerHTML);
            //});
        }
        this.state.toggledTags = this.state.toggledTags.filter(tag => !tag.includes("<"));
        console.log(this.state.toggledTags);
        this.forceUpdate();
    }

    filterCards = (cardArray) => {
        return cardArray.filter( card => card.title.toLowerCase().includes(this.state.filterText.toLowerCase()) 
        || card.body.toLowerCase().includes(this.state.filterText.toLowerCase())
        );
    }

    // match tags of the cards with the toggled tags
    // the card must match all the toggled tags
    filterCardsByTags = (cardArray) => {
        let filteredCardArray = cardArray;
        for (let i=0; i<this.state.toggledTags.length; i++){
            filteredCardArray = filteredCardArray.filter(card => card.tags.includes(this.state.toggledTags[i]));
        }
        return filteredCardArray;
    }

    filterTags = (tagArray) => {
        return tagArray.filter(tag => tag.toLowerCase().includes(this.state.filterText.toLowerCase()));
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // coded to match reactstrap cutoff
        var numberRows = Math.ceil(this.state.cards.length / numberCards)
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
        let filteredTags = this.filterTags(this.state.tags).map((tag) => <ToggleButton>{tag}</ToggleButton>);

        let filteredCards = this.filterCards(this.state.cards);
        let tagFilteredCards = this.filterCardsByTags(filteredCards);

        let displayContent;

        if (filteredCards.length <= 0 || tagFilteredCards.length <= 0){
            displayContent = <p class="guide-text">Can't find tutorial? Visit our Community Forum below to request for a new tutorial!</p>
        }
        else{
            displayContent = ([...Array(this.state.numberRows).keys()]).map(rowInd => (
                <WickCardDeckContainer
                    key={rowInd}
                    cards={tagFilteredCards.slice(this.state.numberCards*rowInd, this.state.numberCards*(rowInd + 1))}
                    type="tutorial"
                    usePadding
                />
            ))
        }

        return (
            <Fragment>
                <input class="wick-filter" type="text" placeholder="Filter tutorials" value={this.state.filterText} onChange={this.updateFilter}></input>
                <div class="tags-group" onClick={this.updateTags}>{filteredTags}</div>
                {displayContent}
            </Fragment>
        );
    }
};

export default TutorialCardBlockContainer;
