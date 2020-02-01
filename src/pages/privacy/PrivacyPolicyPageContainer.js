import React, {Component, Fragment} from 'react';

import PrivacyPolicyPage from './PrivacyPolicyPage';

import ReactGA from 'react-ga'; 


class PrivacyPolicyPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        ReactGA.pageview('/cookie');
        return (
            <Fragment>
                <PrivacyPolicyPage />
            </Fragment>
        );
    }
};

export default PrivacyPolicyPageContainer;