
import React from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import '../../scss_styles/Terms.scss';

class CookiePolicyPage extends React.Component {
    render () {
        return (
            <Container className="fadeIn animated">
                <Helmet>
                    <title>The Wick Editor - Cookie Policy</title>
                    <meta name="description" content="The Wick Editor cookie policy." />
                </Helmet>
                <div className="terms-body">
                <h1>Cookie Policy for Wick Editor </h1>
                    <p>This is the Cookie Policy for the Wick Editor including the editor (<a href="https://editor.wickeditor.com">https://editor.wickeditor.com</a>), the Wick Editor forum (<a href="https://forum.wickeditor.com">https://forum.wickeditor.com</a>), and the Wick Editor website (<a href="https://www.wickeditor.com">https://www.wickeditor.com</a>)
                    This policy is part of our Privacy Statements, and is intended to be read in conjunction with our <a href="https://www.wickeditor.com/#/terms-of-service">Terms of Service</a> and <a href="https://www.wickeditor.com/#/privacy-policy">Privacy Policy.</a></p>

                    <p><strong>What Are Cookies</strong></p>
                    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                    <p>For more general information on cookies see the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article on HTTP Cookies.</a></p>

                    <p><strong>How We Use Cookies</strong></p>
                    <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                    <p><strong>Disabling Cookies</strong></p>
                    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
                    
                    <p><strong>The Cookies We Set</strong></p>
                    <ul>
                    <li>
                        <p>Account related cookies</p>
                        <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                    </li>
                    <li>
                        <p>Login related cookies</p>
                        <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                    </li>
                    <li>
                        <p>Site preferences cookies</p>
                        <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                    </li>
                    </ul>

                    <p><strong>Third Party Cookies</strong></p>
                    <p>In some special cases we also use cookies provided by third parties. The following section details which third party cookies you might encounter through this site.</p>
                    <ul>
                        <li>
                            <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                            <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                            <p>More Information</p>
                            <ul className="privacy-links">
                                <li><a href="https://policies.google.com/privacy">Google Analytics Privacy Policy</a></li>
                            </ul>
                        </li>
                        <br></br>
                        <li>
                            <p>We use embeds from several websites to deliver content to you in the form of community projects, introductory videos and tutorial videos. We serve content from websites such as YouTube, a video sharing platform, and Itch.io, a website where independent creators can serve games. These sites may serve cookies to determine how many times you view content served on their website, how long you watch that content, and other information regarding your use of embedded content. These sites may use this information for advertising purposes. Please refer to their individual privacy policies and cookie policies for more information.</p>
                            <p>More Information</p>
                            <ul className="privacy-links">
                                <li><a href="https://policies.google.com/privacy">YouTube (Google) Privacy Policy</a></li>
                                <li><a href="https://itch.io/docs/legal/privacy-policy">Itch.io Privacy Policy</a></li>
                            </ul>
                            <br></br>
                        </li>
                        <li>
                            <p>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; Facebook, GitHub, Google, and Twitter, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</p>
                            <p>More Information</p>
                            <ul className="privacy-links">
                                <li><a href="https://www.facebook.com/privacy/explanation">Facebook Privacy Policy</a></li>
                                <li><a href="https://policies.google.com/privacy">Google Privacy Policy</a></li>
                                <li><a href="https://help.github.com/en/github/site-policy/github-privacy-statement">GitHub Privacy Policy</a></li>
                                <li><a href="https://twitter.com/en/privacy">Twitter Privacy Policy</a></li>
                            </ul>
                            <br></br>
                        </li>
                    </ul>

                    <p><strong>More Information</strong></p>
                    <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com">Cookies Policy Template Generator</a> and the <a href="https://www.webterms.org">WebTerms Generator</a>.</p>
                    <p>However if you are still looking for more information then you can contact us by email:</p>
                    <p>
                        <ul>
                            <li>Email: <a href="@mailto:contact@wickeditor.com">contact@wickeditor.com</a></li>
                        </ul>
                    </p>

                </div>
            </Container>
        );
    }
}

export default CookiePolicyPage;
