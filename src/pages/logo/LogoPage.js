
import React from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import '../../scss_styles/LogoPage.scss';

class LogoPage extends React.Component {
    render () {
        return (
            <Container className="fadeIn animated">
                <Helmet>
                    <title>The Wick Editor - Terms and Conditions</title>
                    <meta name="description" content="The Wick Editor Terms and Conditions." />
                </Helmet>
                <div className="logo-page">
                    <div className="logo-container">
                        <div className="logo-element">Logo</div>
                        <div className="logo-element">Combined Logo Mark</div>
                        <div className="logo-element"></div>
                        <div className="logo-element"></div>
                    </div>
                    <div className="logo-rules">
                        <div className="logo-list logo-dos">
                            <h3>Do these things:</h3>
                            <ul>
                                <li className="good-list-item">Use the Logo, Mascot, or Logo Mark to link to Wick Editor</li>
                                <li className="good-list-item">Use the Logo, Mascot, or Logo Mark to show that your project uses Wick Editor</li>
                                <li className="good-list-item">Use the Logo, Mascot, or Logo Mark in a blog post or news article about Wick Editor</li>
                            </ul>
                        </div>
                        <div className="logo-list logo-donts">
                            <h3>Don't do these things:</h3>
                            <ul>
                                <li className="bad-list-item">Use the Logo, Mascot, or Logo Mark as your application's icon</li>
                                <li className="bad-list-item">Create a modified version of the Logo, Mascot, or Logo Mark</li>
                                <li className="bad-list-item">Integrate the Logo, Mascot, or Logo Mark into your logo</li>
                                <li className="bad-list-item">Use the Logo, Mascot, or Logo Mark without permission</li>
                                <li className="bad-list-item">Sell the Logo, Mascot, or Logo Mark without permission</li>
                                <li className="bad-list-item">Change the colors, dimensions or add your own text/images</li>
                            </ul>
                        </div>
                    </div>
                    <div className="logo-rules">
                        <div className="logo-list logo-contact">
                            <h3>Contact us if:</h3>
                            <ul>
                                <li>You want to use these images in a video, or mainstream media piece.</li>
                                <li>You're unsure if your use of the Logo, Mascot or Logo Mark is acceptable</li>
                            </ul>
                        </div>
                        <div className="logo-list logo-contact">
                            <h3>Naming projects and products:</h3>
                            <div className="logo-text">
                                Please do not name your project anything that implies Wick Editor, or Wicklets's endorsement. This also applies to domain names.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default LogoPage;
