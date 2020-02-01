import React, {Component, Fragment} from 'react';

import TermsAndConditionsPage from './TermsAndConditionsPage';

import ReactGA from 'react-ga'; 


class TermsAndConditionsPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        ReactGA.pageview('/cookie');
        return (
            <Fragment>
                <TermsAndConditionsPage />
            </Fragment>
        );
    }
};

export default TermsAndConditionsPageContainer;