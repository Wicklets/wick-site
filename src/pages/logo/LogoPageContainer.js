import React, {Component, Fragment} from 'react';

import LogoPage from './LogoPage';
import ReactGA from 'react-ga'; 


class LogoPageContainer extends Component {
    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        ReactGA.pageview('/cookie');
        return (
            <Fragment>
                <LogoPage />
            </Fragment>
        );
    }
};

export default LogoPageContainer;