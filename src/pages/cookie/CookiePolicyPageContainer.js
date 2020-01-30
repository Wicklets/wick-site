import React, {Component, Fragment} from 'react';

import CookiePolicyPage from './CookiePolicyPage.js';

import ReactGA from 'react-ga'; 


class CookiePolicyPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        ReactGA.pageview('/cookie');
        return (
            <Fragment>
                <CookiePolicyPage />
            </Fragment>
        );
    }
};

export default CookiePolicyPageContainer;