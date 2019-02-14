/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPageContainer.js

    Container for Learn page
*/

import React, { Component, Fragment } from 'react';

import LearnPage from './LearnPage.js';
import Header from '../../site_components/header/Header.js';

import example1 from '../../Images/Examples/example1.png';
import example2 from '../../Images/Examples/example2.png';

class LearnPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tutorials: [
                {
                    title: "Getting Started with Wick Editor",
                    body: "In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
                    launchEditor: () => window.open("http://wickeditor.com/wick-editor/"),
                    link: "https://www.youtube.com/embed/bhN2VxyWJiU"
                },
                {
                    title: "Sounds in Wick Editor",
                    body: "Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",
                    launchEditor: () => window.open("http://wickeditor.com/wick-editor/"),
                    link: "https://www.youtube.com/embed/T08B0KkEAZA"
                }
            ],
            examples: [
                {
                    title: "Follow Mouse",
                    body: "See how you can get your character to follow your mouse movements around the screen!",
                    image: example1,
                    launchEditor: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=FollowMouse.json"),
                    useImage: true
                },
                {
                    title: "Multiple Rooms",
                    body: "Learn about how you can insert multiple different scenes into your animation.",
                    image: example2,
                    launchEditor: () => window.open("http://wickeditor.com/wick-editor/index.html?demo=MultipleRooms.json"),
                    useImage: true
                }
            ]
        };

    }

    componentDidMount = () => {
        window.scrollTo({top: 0, left: 0, behvaior: "smooth"})
    }

    render() {
        return (
            <Fragment>
                <Header
                    title="get started"
                    subtitle="Hit the ground running with the basics of wick editor by trying out our starter tutorial."
                    buttonLabel="Try the Tutorial"
                    onClick={() => window.open("http://wickeditor.com/#tutorials")}
                />
                <LearnPage {...this.state} />
            </Fragment>
        );
    }
};

export default LearnPageContainer;