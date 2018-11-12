/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    PreviewCard.js

    Component for Example/Tutorial Cards on the Homepage
*/

import React, {Fragment} from 'react';
import './PreviewCard.scss';

const PreviewCard = ({onMouseEnter, onMouseLeave, displayOverlay}) => (
    <Fragment>
        <div
            className="PreviewCard-container"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="imagePlaceholder" />
            <div className="PreviewCard-title">type something</div>
            <div className="PreviewCard-text">description type something lorem ipsum type something lorem ipsum type something lorem ipsum</div>
            {displayOverlay && (
                <div className="PreviewCard-overlay">
                    <div className="PreviewCard-overlayText">click to open</div>
                </div>
            )}
        </div>
    </Fragment>
);

export default PreviewCard;