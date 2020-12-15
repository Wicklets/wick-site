import React from 'react';
import Helmet from 'react-helmet'

class ProofPage extends React.Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>The Wick Editor - Privacy</title>
                    <meta name="description" content="Proof." />
                    <meta name="robots" content="noindex"/>
                </Helmet>
                <p>
                    Hi, I'm Luca, <b>my username is Luxapod</b> and I'm running an AMA on Reddit to talk about the Wick Editor!
                </p>
            </div>
        );
    }
}

export default ProofPage