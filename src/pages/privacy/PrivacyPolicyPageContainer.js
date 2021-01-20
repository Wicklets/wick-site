import React, {Component, Fragment} from 'react';

import PrivacyPolicyPage from './PrivacyPolicyPage';

class PrivacyPolicyPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <PrivacyPolicyPage />
            </Fragment>
        );
    }
};

export default PrivacyPolicyPageContainer;