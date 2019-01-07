/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Creators.js

    Content for the Wick Creators
*/

import React, {Fragment} from 'react';

import CreatorsRow from './CreatorsRow.js';

import coreyemery from '../../Images/People/CoreyEmery.jpg';
import lucadamasco from '../../Images/People/LucaDamasco.jpg';
import zachrispoli from '../../Images/People/ZachRispoli.png';
import annagusman from '../../Images/People/AnnaGusman.jpeg';

const CreatorsContainer = () => (
    <Fragment>
        <CreatorsRow
            people={
                [{name: "Zach Rispoli", img: zachrispoli},
                 {name: "Luca Damasco", img: lucadamasco}]
            }
            title="The Wick Editor was created and is led by"
            includeHeadshot
        />

        <CreatorsRow
            people={
                [{name: "Anna Gusman", img: annagusman},
                 {name: "Corey Emery", img: coreyemery}]
            }
            title="Brand and web design by"
            includeHeadshot
        />

        <CreatorsRow
            people={
                [{name: "Anna Gusman"},
                 {name: "Cameron Burgess"},
                 {name: "Gautam Bose"}]
            }
            title="Editor Interface design by"
        />
    </Fragment>
);

export default CreatorsContainer;