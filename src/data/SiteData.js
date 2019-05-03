/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SiteData.js

    Store for News, Examples, Tutorials, etc. for Wick Editor
*/

import test from '../Images/Tutorials/testworld.svg';
import test2 from '../Images/Tutorials/testworld3.svg';
import comingsoon from '../Images/Misc/comingsoon.png';
import coreyemery from '../Images/People/CoreyEmery.svg';
import lucadamasco from '../Images/People/LucaDamasco.svg';
import zachrispoli from '../Images/People/ZachRispoli.svg';
import community1 from '../Images/Projects/community1.png';
import community4 from '../Images/Projects/community4.png';
import community5 from '../Images/Projects/community5.png';

export const examples = [
    {
        title: "Follow Mouse",
        body: "See how you can get your character to follow your mouse movements around the screen!",
        image: test,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Example 1"
    },
    {
        title: "Multiple Rooms",
        body: "Learn about how you can insert multiple different scenes into your animation.",
        image: test,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Example 2"
    },
    {
        title: "More Examples Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Examples!",
        image: comingsoon,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Example 3"
    },
    {
        title: "Follow Mousi",
        body: "See how you can get your character to follow your mouse movements around the screen!",
        image: test,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Example 4"
    }
];

export const tutorials = [
    {
        title: "Getting Started with Wick Editor",
        body: "In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
        image: test2,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Tutorial 1"
    },
    {
        title: "Sounds in Wick Editor",
        body: "Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",
        image: test2,
        embed: "https://www.youtube.com/embed/T08B0KkEAZA",
        number: "Tutorial 2"
    },
    {
        title: "More Tutorials Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Tutorials!",
        image: test2,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Tutorial 3",
        disabled: true
    },
    {
        title: "Getting Started with Wick Editors",
        body: "In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
        image: test2,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Tutorial 4"
    },
    {
        title: "Sounds in Wick Editors",
        body: "Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",
        image: test2,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "Tutorial 5"
    }
];

export const news = [
    {
        title: "Support Wick Editor on Patreon!",
        text: "Become a supporter and help Wick Editor continue to develop!",
        date: "02/15/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/support-the-wick-editor-on-patreon/1072")
    },
    {
        title: "Wick Editor Alpha update v3",
        text: "We’ve posted a major update to the Wick Editor 1.0 Alpha",
        date: "01/30/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/wick-editor-alpha-update-v3/1404")
    },
    {
        title: "Wick Editor Alpha: Update v2",
        text: "We’ve posted an update to the Wick Editor Alpha.",
        date: "12/01/18",
        onClick: () => window.open("https://forum.wickeditor.com/t/wick-editor-alpha-update-v2/1236")
    }
];

export const carouselProjects = [
    {
        src: "Corey Emery",
        projectName: "Corey Emery",
        userImage: coreyemery,
        projectImage: community1,
        description: "project description blah blah blah"
    },
    {
        src: "Luca Damasco",
        projectName: "Luca Damasco",
        userImage: lucadamasco,
        projectImage: community4,
        description: "project description blah blah blah"
    },
    {
        src: "Zach Rispoli",
        projectName: "Zach Rispoli",
        userImage: zachrispoli,
        projectImage: community5,
        description: "project description blah blah blah"
    }
];