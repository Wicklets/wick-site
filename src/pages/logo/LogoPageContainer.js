import React, {Component, Fragment} from 'react';

import LogoPage from './LogoPage';

class LogoPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <LogoPage />
            </Fragment>
        );
    }
};

export default LogoPageContainer;