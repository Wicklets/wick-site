
import React from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

class AboutPage extends React.Component {

    cookieScript = (d, s, id) => {
        var js, tjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://app.termly.io/embed-policy.min.js";
        tjs.parentNode.insertBefore(js, tjs);
    }

    render () {
        this.cookieScript(document, 'script', 'termly-jssdk');
        return (
            <Container className="fadeIn animated">
                <Helmet>
                    <title>The Wick Editor - Cookie Policy</title>
                    <meta name="description" content="The Wick Editor cookie policy." />
                </Helmet>
                <div>If the policy below fails to load, a copy of the policy can be found by following <a href="https://app.termly.io/document/cookie-policy/68190e9e-b920-478b-935a-5920e5f6eb46">this link.</a></div>
                <div name="termly-embed" data-id="68190e9e-b920-478b-935a-5920e5f6eb46" data-type="iframe"></div>
            </Container>
        );
    }
}

export default AboutPage;
