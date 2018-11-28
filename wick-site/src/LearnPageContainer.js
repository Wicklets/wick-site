/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    LearnPageContainer.js

    Container for Learn page (allows us to scroll back to top on page change)
*/

import React, {Component} from 'react';
import LearnPage from './LearnPage.js';
import example1 from './example1.png';
import example2 from './example2.png';

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
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <LearnPage {...this.state} />
        );
    }
};

export default LearnPageContainer;