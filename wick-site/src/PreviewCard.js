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
            className="previewCard"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="imagePlaceholder" />
            <div className="cardTitle">type something</div>
            <div className="cardText">description type something lorem ipsum type something lorem ipsum type something lorem ipsum</div>
            {displayOverlay && (
                <div className="previewCardOverlay">
                    <div className="openPreviewCard">click to open</div>
                </div>
            )}
        </div>
    </Fragment>
);

export default PreviewCard;