/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SupportersPageContainer.js

    Container for Supporters page
*/

import React, {Component, Fragment} from 'react';

import SupportersPage from './SupportersPage.js';
import Header from '../../site_components/header/Header.js';

class SupportersPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="supporters"
                    buttonLabel="support us"
                    onClick={() => window.open("https://www.patreon.com/WickEditor")}
                />
                <SupportersPage />
            </Fragment>
        );
    }
};

export default SupportersPageContainer;