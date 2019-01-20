/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickAspectImage.js

    Image Container for Aspect Ratio Images
*/

import React from 'react';
import Img from 'react-image';

import '../../scss_styles/WickAspectImage.scss';

const WickAspectImage = ({image, heightPercent}) => (
    <div className={"WickAspectImage-aspectContainer WickAspectImage-aspectContainer--" + heightPercent}>
        <div className="WickAspectImage-imageContainer">
            <Img className="WickAspectImage-image" src={image} />
        </div>
    </div>
);

export default WickAspectImage;