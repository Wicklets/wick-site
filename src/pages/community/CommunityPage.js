/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPage.js

    Top-Level Content for the Wick Gallery page
*/

import React from 'react';

import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import ContentSection from '../../page_components/content_section/ContentSection.js';
import { WickSmallSpacer } from '../../pattern_library/spacers/WickSpacers.js';
import ExternalContacts from '../../page_components/external_contact/ExternalContactLinksContainer.js';
import CommunityProjectBoard from './CommunityProjectBoard/CommunityProjectBoard';

// Edited to partial React 16 style by Luca 7/26/2019.
class CommunityPage extends React.Component {
    render () {
        return (
            <Container className="fadeIn animated">
                <Helmet>
                    <title>The Wick Editor - Community</title>
                    <meta name="description" content="Links to the forum, our contact info, and more." />
                </Helmet>
                <ContentSection
                    title="Wick Editor Community Forum"
                    text="Read about the latest updates, post your projects, make suggestions, and chat with other Wick Editor users on the Wick Editor Community Forum!"
                    includeUnderline
                />
                <WickSmallSpacer />
                    <ContentSection
                        title="Community Projects"
                        text="Check out what people are making with Wick Editor!"
                        includeUnderline
                        includePadding
                    >
                        <CommunityProjectBoard projects={this.props.projects}/>
                    </ContentSection>
                <WickSmallSpacer />
                <ExternalContacts />
                <WickSmallSpacer />
            </Container>
        ); 
    }
}

export default CommunityPage;
