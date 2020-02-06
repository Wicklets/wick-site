
import React from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import '../../scss_styles/Terms.scss';

class TermsAndConditionsPage extends React.Component {
    render () {
        return (
            <Container className="fadeIn animated">
                <Helmet>
                    <title>The Wick Editor - Terms and Conditions</title>
                    <meta name="description" content="The Wick Editor Terms and Conditions." />
                </Helmet>
                <div className="terms-body">
                    <h1>Wick Editor Open Source Applications Terms and Conditions</h1>
                        <p>These Wick Editor Open Source Applications Terms and Conditions ("Application Terms") are a legal agreement between you (either as an individual or on behalf of an entity) and Wicklets LLC regarding your use of Wicklets's applications, such as The Wick Editor and associated documentation ("Software"). These Application Terms apply to the executable code version of the Software. Source code for the Software is available separately and free of charge under open source software license agreements. If you do not agree to all of the terms in these Application Terms, do not download, install, use, or copy the Software.</p>
                        <h2>Open Source Licenses and Notices</h2>
                            <p>The open source license for the Software is included in the "Open Source Notices" documentation that is included with the Software. That documentation also includes copies of all applicable open source licenses.</p>
                            <p>To the extent the terms of the licenses applicable to open source components require Wicklets to make an offer to provide source code in connection with the Software, such offer is hereby made, and you may exercise it by contacting Wicklets using this email: contact@wickeditor.com or and/or accessing our open source repositories at <a href="https://github.com/Wicklets">https://github.com/Wicklets</a>.</p>
                            <p>Unless otherwise agreed to in writing with Wicklets, your agreement with Wicklets will always include, at a minimum, these Application Terms. Open source software licenses for the Software's source code constitute separate written agreements. To the limited extent that the open source software licenses expressly supersede these Application Terms, the open source licenses govern your agreement with Wicklets for the use of the Software or specific included components of the Software.</p>
                        <h2>Wicklets's Logos</h2>
                            <p>The license grant included with the Software is not for Wicklets’s trademarks, which include the Software logo designs. Wicklets reserves all trademark and copyright rights in and to all Wicklets trademarks. Wicklets’s logos include, for instance, the stylized designs that include "logo" in the file title in the "logos" folder.</p>
                            <p>The names Wicklets, Wick Editor, WickEditor, Wick Editor Desktop, Wick Editor for Mac, and related Wicklets logos and Wick Editor logos and/or stylized names are trademarks of Wicklets. You agree not to display or use these trademarks in any manner without Wicklets’s prior, written permission, except as allowed by Wicklets’s Logos and Usage Policy: <a href="www.wickeditor.com/#/logos">www.wickeditor.com/#/logos.</a></p>
                        <h2>Privacy</h2>
                            <p>The Software may collect personal information. If the Software does collect personal information on Wicklets’s behalf, Wicklets will process that information in accordance with the <a href="www.wickeditor.com/#/privacy-policy">Wicklets Privacy Policy</a>. By using this software, you agree to the terms of the <a href="www.wickeditor.com/#/privacy-policy">Wicklets Privacy Policy</a>.</p>
                        <h2>Cookies</h2>
                            <p>The software uses cookies to improve your user experience, and improve our website. These cookies will be used in accordance with the <a href="www.wickeditor.com/#/cookie-policy">Wicklets Cookie Policy</a>. By using this software, you agree to the terms of the <a href="www.wickeditor.com/#/cookie-policy">Wicklets Cookie Policy</a>.</p>    
                        <h2>Additional Services</h2>
                            <h3>Auto-Update Services</h3>
                                <p>The Software may include an auto-update service ("Service"). If you choose to use the Service or you download Software that automatically enables the Service, Wicklets will automatically update the Software when a new version is available.</p>
                            <h3>Disclaimers and Limitations of Liability</h3>
                                <p>THE SERVICE IS PROVIDED ON AN "AS IS" BASIS, AND NO WARRANTY, EITHER EXPRESS OR IMPLIED, IS GIVEN. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. Wicklets does not warrant that (i) the Service will meet your specific requirements; (ii) the Service is fully compatible with any particular platform; (iii) your use of the Service will be uninterrupted, timely, secure, or error-free; (iv) the results that may be obtained from the use of the Service will be accurate or reliable; (v) the quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations; or (vi) any errors in the Service will be corrected. YOU EXPRESSLY UNDERSTAND AND AGREE THAT WICKLETS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF GITHUB HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) RELATED TO THE SERVICE, including, for example: (i) the use or the inability to use the Service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the Service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third-party on the Service; (v) or any other matter relating to the Service. Wicklets reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. Wicklets shall not be liable to you or to any third-party for any price change, suspension or discontinuance of the Service.</p>
                        <h2>Miscellanea</h2>
                            <ol>
                                <li>No Waiver. The failure of Wicklets to exercise or enforce any right or provision of these Application Terms shall not constitute a waiver of such right or provision.</li>
                                <li>Entire Agreement. These Application Terms, together with any applicable Privacy Notices, constitutes the entire agreement between you and Wicklets and governs your use of the Software, superseding any prior agreements between you and Wicklets (including, but not limited to, any prior versions of the Application Terms).</li>
                                <li>Governing Law. You agree that these Application Terms and your use of the Software are governed under Pennsylvania law and any dispute related to the Software must be brought in a tribunal of competent jurisdiction located in or near Pittsburgh, Pennsylvania.</li>
                                <li>Third-Party Packages. The Software supports third-party "Packages" which may modify, add, remove, or alter the functionality of the Software. These Packages are not covered by these Application Terms and may include their own license which governs your use of that particular package.</li>
                                <li>No Modifications; Complete Agreement. These Application Terms may only be modified by a written amendment signed by an authorized representative of Wicklets, or by the posting by Wicklets of a revised version. These Application Terms, together with any applicable Open Source Licenses and Notices and Wicklets’s Privacy Statement, represent the complete and exclusive statement of the agreement between you and us. These Application Terms supersede any proposal or prior agreement oral or written, and any other communications between you and Wicklets relating to the subject matter of these terms.</li>
                                <li>License to Wicklets Policies. These Application Terms are licensed under the Creative Commons Attribution license. You may use it freely under the terms of the Creative Commons license.</li>
                                <li>Contact Us. Please send any questions about these Application Terms to contact@wickeditor.com </li>
                                <li>These terms and conditions were adapted and modified from the <a href="https://desktop.github.com/terms/">GitHub Open Source Applications Terms and Conditions</a></li>
                            </ol>
                </div>
            </Container>
        );
    }
}

export default TermsAndConditionsPage;
