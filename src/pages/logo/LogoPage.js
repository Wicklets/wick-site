
import React from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import LogoDownloadButton from './LogoDownloadButton.js';

import '../../scss_styles/LogoPage.scss';

class LogoPage extends React.Component {
    render () {
        return (
            <Container className="fadeIn animated">
                <Helmet>
                    <title>The Wick Editor - Logos</title>
                    <meta name="description" content="The Wick Editor Terms and Conditions." />
                </Helmet>
                <h1>Wick Editor Logo and Usage</h1>
                <h3 className="logo-page-subtitle">Show that your project is made with Wick Editor! Read below for our logo policy.</h3>
                <div className="logo-page">
                    <div className="logo-container">
                        <LogoDownloadButton fileName="WickEditor_logos.zip" downloadLink="/logos/WickEditor_logos.zip" imgSrc="/logos/BrickWickEditorLogo.png" text="Download Logo" />
                        <LogoDownloadButton fileName="WickEditor_combined.zip" downloadLink="/logos/WickEditor_combined.zip" imgSrc="/logos/LogoMascotCombination.png" text="Download Combined Mark" />
                        <LogoDownloadButton fileName="WickEditor_mascots.zip" downloadLink="/logos/WickEditor_mascots.zip" imgSrc="/logos/WickEditor_Mascot.png" text="Download Mascot" />
                    </div>
                    <div className="logo-rules">
                        <div className="logo-list logo-dos">
                            <h3>Do these things:</h3>
                            <ul>
                                <li className="list-item good-list-item">Use the Logo, Mascot, or Combined Mark to link to Wick Editor</li>
                                <li className="list-item good-list-item">Use the Logo, Mascot, or Combined Mark to show that your project was made in Wick Editor</li>
                                <li className="list-item good-list-item">Use the Logo, Mascot, or Combined Mark in a blog post or news article about Wick Editor</li>
                            </ul>
                        </div>
                        <div className="logo-list logo-donts">
                            <h3>Please don't do these things:</h3>
                            <ul>
                                <li className="list-item bad-list-item">Use the Logo, Mascot, or Combined Mark as your application's icon</li>
                                <li className="list-item bad-list-item">Create a modified version of the Logo, Mascot, or Combined Mark</li>
                                <li className="list-item bad-list-item">Integrate the Logo, Mascot, or Combined Mark into your logo</li>
                                <li className="list-item bad-list-item">Use the Logo, Mascot, or Combined Mark without permission</li>
                                <li className="list-item bad-list-item">Sell the Logo, Mascot, or Combined Mark without permission</li>
                                <li className="list-item bad-list-item">Change the colors, dimensions or add your own text/images</li>
                            </ul>
                        </div>
                    </div>
                    <div className="logo-rules">
                        <div className="logo-list logo-contact">
                            <h3>Contact us if:</h3>
                            <ul>
                                <li>You want to use these images in a video, or mainstream media piece.</li>
                                <li>You're unsure if your use of the Logo, Mascot or Combined Mark is acceptable</li>
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
