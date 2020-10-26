/*
    Alex Yixuan Xu (ayxx@nyu.edu)
    WickEditor Website
    reference.js

    Container for Learn Page List of Reference
*/

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { referenceItems } from '../../data/SiteData.js';

import WickReferenceModal from './WickReferenceModal';

import '../../scss_styles/LearnPageFilter.scss';
import { Container, Row, Col } from 'reactstrap';

class ReferenceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterText: '',

            referenceData: {},
            isModalOpen: false
        }

        this.groupNames = [...new Set(referenceItems.map(item => item.group))]; // find unique group names
    }

    updateFilter = (text) => {
        this.setState({
            filterText: text.target.value
        });
    }

    filterReference = (referenceList) => {
        return referenceList.filter(referenceItem => referenceItem.name.toLowerCase().includes(this.state.filterText.toLowerCase())
        );
    }

    handleClick = (e) => {
        this.setState({
            referenceData: referenceItems.filter(referenceItem => referenceItem.name === e.target.innerHTML.replace(' [deprecated]', ''))[0],
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleAnchor = (e) => {
        let anchor = document.getElementById(e.target.innerHTML.toLowerCase() + '-group');
        anchor.scrollIntoView(true);
    }

    render() {
        const referenceGroups = this.groupNames.map(groupName => <li key={'list-item-gn-' + groupName} className="reference-groups-list-item"><Link onClick={this.handleAnchor} to={{ pathname: "/learn/reference", hash: "#" + groupName.toLowerCase() + '-group' }}>{groupName}</Link></li>);
        let displayItems = [];
        let listItemsArr = this.groupNames.map(groupName =>
            this.filterReference(referenceItems)
                .filter(referenceItem => referenceItem.group === groupName)
                .map(listItem => {return <li key={'filter-reference-' + listItem.name} className={("deprecated" in listItem) ? "reference-list-item deprecated" : "reference-list-item"}>
                    <button onClick={this.handleClick}>
                        {("deprecated" in listItem) ? listItem.name + " [deprecated]" : listItem.name}
                    </button>
        </li>}));

        //let columnDisplay = [2, 4, 2];

        for (let i = 0; i < this.groupNames.length; i++) {
            // every 2 lists belong in a column
            if (i === 0 || i === 6) {
                displayItems.push(<Col><div className="reference-list-container"><h3 className="reference-list-title" id={this.groupNames[i].toLowerCase() + '-group'}>{this.groupNames[i]}</h3><ul className="reference-list">{listItemsArr[i]}</ul></div>
                    <div className="reference-list-container"><h3 className="reference-list-title" id={this.groupNames[i + 1].toLowerCase() + '-group'}>{this.groupNames[i + 1]}</h3><ul className="reference-list">{listItemsArr[i + 1]}</ul></div></Col>);
            }
            else if (i === 2) {
                displayItems.push(<Col><div className="reference-list-container"><h3 className="reference-list-title" id={this.groupNames[i].toLowerCase() + '-group'}>{this.groupNames[i]}</h3><ul className="reference-list">{listItemsArr[i]}</ul></div>
                    <div className="reference-list-container"><h3 className="reference-list-title" id={this.groupNames[i + 1].toLowerCase() + '-group'}>{this.groupNames[i + 1]}</h3><ul className="reference-list">{listItemsArr[i + 1]}</ul></div>
                    <div className="reference-list-container"><h3 className="reference-list-title" id={this.groupNames[i + 2].toLowerCase() + '-group'}>{this.groupNames[i + 2]}</h3><ul className="reference-list">{listItemsArr[i + 2]}</ul></div>
                    <div className="reference-list-container"><h3 className="reference-list-title" id={this.groupNames[i + 3].toLowerCase() + '-group'}>{this.groupNames[i + 3]}</h3><ul className="reference-list">{listItemsArr[i + 3]}</ul></div></Col>);
            }
        }

        return (
            <Fragment>
                <input className="wick-filter" aria-label="filter" type="text" placeholder="Filter reference" value={this.state.filterText} onChange={this.updateFilter}></input>
                <ul className="reference-groups-list">{referenceGroups}</ul>
                <div className="content-display-container"><Container><Row>{displayItems}</Row></Container></div>
                <WickReferenceModal referenceData={this.state.referenceData} onClick={this.handleClick} isModalOpen={this.state.isModalOpen} />
            </Fragment>
        );
    }
};

export default ReferenceList;