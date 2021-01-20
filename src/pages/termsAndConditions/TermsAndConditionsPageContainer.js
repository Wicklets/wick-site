import React, {Component, Fragment} from 'react';

import TermsAndConditionsPage from './TermsAndConditionsPage';

class TermsAndConditionsPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <TermsAndConditionsPage />
            </Fragment>
        );
    }
};

export default TermsAndConditionsPageContainer;