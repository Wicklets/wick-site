import React, {Component, Fragment} from 'react';

import CookiePolicyPage from './CookiePolicyPage.js';

class CookiePolicyPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <CookiePolicyPage />
            </Fragment>
        );
    }
};

export default CookiePolicyPageContainer;