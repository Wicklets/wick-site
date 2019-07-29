/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SiteData.js

    Store for News, Examples, Tutorials, etc. for Wick Editor
*/

import followMouse from '../Images/Examples/followMouse.png';
import multipleRooms from '../Images/Examples/multipleRooms.png';
import dragAndDrop from '../Images/Examples/dragAndDrop.png';
import playingTheTimeline from '../Images/Examples/playingTheTimeline.png';
import playingClips from '../Images/Examples/playingClips.png';
import popups from '../Images/Examples/popups.png';
import clickerGame from '../Images/Examples/clickerGame.png';
import hauntedHouse from '../Images/Examples/hauntedHouse.png';
import wellDressedGhost from '../Images/Examples/wellDressedGhost.png';
import DJSpookyman from '../Images/Examples/DJSpookyman.png';
import legacyEditorTutorialThumbnail from '../Images/Tutorials/testworld3.svg';
import comingsoon from '../Images/Misc/comingsoon.png';

// Tutorial Images
import img_gettingStartedWithAnimation from '../Images/Tutorials/gettingStartedWithAnimation_site.png';
import img_makingInteractiveProjects from '../Images/Tutorials/makingThingsInteractive_site.png';
import img_usingKeyboardInteractions from '../Images/Tutorials/usingKeyboardInteractions_site.png';

// Community Projects
import img_goodEggs from '../Images/Community/goodEggs.png';
import img_lockUp from '../Images/Community/lockUpDungeon.png';
import img_clickMeIfYouCan from '../Images/Community/clickMeIfYouCan.png';

export const examples = [
    {
        title: "Follow Mouse",
        exampleName: "followMouse",
        body: "See how you can get your character to follow your mouse movements around the screen!",
        body_extended: "Have a character follow the mouse around the screen using an 'Update' event!",
        tags: ["Follow", "Beginner", "Interactive"],
        image: followMouse,
        number: "Example 1"
    },
    {
        title: "Multiple Rooms",
        exampleName: "multipleRooms",
        body: "Learn how to create a project with multiple rooms for a point and click game!",
        body_extended: "Set up the basic structure for a point and click adventure game with this multi-room example. Clicking a button sends you to a unique room.",
        tags: ["Rooms", "Beginner", "Interactive"],
        image: multipleRooms,
        number: "Example 2"
    },
    {
        title: "Drag and Drop",
        exampleName: "dragAndDrop",
        body: "Learn how to drag characters and items around the screen.",
        body_extended: "Using the 'MouseDrag' event, we can move characters around the screen by clicking and dragging.",
        tags: ["Dragging", "Beginner", "Interactive"],
        image: dragAndDrop,
        number: "Example 3"
    },
    {
        title: "Playing the Timeline",
        exampleName: "playingTheTimeline",
        body: "Learn how to control the main timeline with a button.",
        body_extended: "Control the timeline using a button! When the play button is pressed, the main timeline plays.",
        tags: ["Timeline", "Beginner", "Interactive"],
        image: playingTheTimeline,
        number: "Example 4"
    },
    {
        title: "Playing Clips",
        exampleName: "playingClips",
        body: "Learn how to control the timeline of a clip.",
        body_extended: "Control clip timelines using a button! Each character has their own button that controls their timeline.",
        tags: ["Clips", "Intermediate", "Interactive"],
        image: playingClips,
        number: "Example 5"
    },
    {
        title: "Popups",
        exampleName: "popups",
        body: "Learn how to make a popup in an interactive game.",
        body_extended: "A basic popup example using clips and buttons. By combining the two, we get an interactive, toggleable, chat bubble.",
        tags: ["Popups", "Intermediate", "Interactive"],
        image: popups,
        number: "Example 6"
    },
    {
        title: "Clicker Game",
        exampleName: "biscuitDestroyer",
        body: "An interactive clicker game that keeps track of how many times a button is clicked.",
        body_extended: "An interactive clicker game where a player can try to rack up as many points as possible before time runs out!",
        tags: ["Clicker", "Intermediate", "Interactive"],
        image: clickerGame,
        number: "Example 7"
    },
    {
        title: "Haunted House",
        exampleName: "hauntedHouse",
        body: "A simple example of a point-and-click adventure game.",
        body_extended: "On a stormy night there is a haunted house... do you dare enter?",
        tags: ["Intermediate", "Interactive", "Sound"],
        image: hauntedHouse,
        number: "Example 8"
    },
    {
        title: "Well-Dressed Ghost",
        exampleName: "wellDressedGhost",
        body: "A simple example of a dress-up game.",
        body_extended: "Put some clothes on this ghost! Select from hats, wigs, noses, mouth, and more.",
        tags: ["Intermediate", "Interactive"],
        image: wellDressedGhost,
        number: "Example 9"
    },
    {
        title: "DJ Spookyman",
        exampleName: "DJSpookyman",
        body: "A simple example of a soundboard project.",
        body_extended: "DJ Spookyman is in the house! Press the buttons and drop a sick beat!",
        tags: ["Intermediate", "Interactive", "Sound"],
        image: DJSpookyman,
        number: "Example 10"
    },
    {
        title: "More Examples Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Examples!",
        image: comingsoon,
        number: "Example 11",
        disabled: true,
    },
];

export const tutorials = [
    {
        title: "Editor 1.0 | Getting Started with Animation",
        body: "Learn how to use the new Wick Editor 1.0 to create animations and navigate the new interface!",
        body_extended: "Learn how to use the new Wick Editor 1.0 to create animations and navigate the new interface! Learn how the new toolbar, inspector and timeline work, and see our new settings menu.",
        tags: ["Intro", "Beginner", "Animation"],
        image: img_gettingStartedWithAnimation,
        embed: "https://youtube.com/embed/pAsrXT8KIrI",
        number: "1.0 Tutorial 1"
    },
    {
        title: "Editor 1.0 | Making Things Interactive",
        body: "In this Wick Editor 1.0 tutorial we create an interactive point and click game and learn about scripting!",
        body_extended: "Learn how to use the new Wick Editor 1.0 to create an interactive point and click game. We'll learn about the tab coding system, how to name a frame, gotoAndStop, and the single-tab coding system.",
        tags: ["Intro", "Beginner", "Games"],
        image: img_makingInteractiveProjects,
        embed: "https://youtube.com/embed/cvANBF43KsY",
        number: "1.0 Tutorial 2"
    },
    {
        title: "Editor 1.0 | Using Keyboard Interactions",
        body: "Learn how to use the keyboard in your interactive Wick Editor 1.0 projects!",
        body_extended: "In this Wick Editor 1.0 tutorial, we learn how to use keyboard controls in our interactive projects. We'll go over the basics of keyboard events, conditionals, and moving objects in x,y space!",
        tags: ["Intro", "Beginner", "Games"],
        image: img_usingKeyboardInteractions,
        embed: "https://youtube.com/embed/mpJOY1-qshU",
        number: "1.0 Tutorial 3"
    },
    /*{
        title: "Editor 1.0 | More Tutorials Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Tutorials!",
        body_extended: "This is a test, this is only a test.",
        tags: ["Coming", "Soon"],
        image: defaultWorld,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "1.0 Tutorial 3",
        disabled: true
    },*/
    {
        title: "Legacy Editor | Getting Started",
        body: "Legacy Editor | Learn how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
        body_extended: "In this Legacy tutorial, learn how to use the legacy editor to create a basic animation, create a basic interactive project, and how to save that project to your computer.",
        tags: ["Legacy", "Beginner", "Animation"],
        image: legacyEditorTutorialThumbnail,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU&t",
        number: "Legacy 1"
    },
    {
        title: "Legacy Editor | Using Sounds",
        body: "Legacy Editor | Learn how to use sounds in your legacy Wick Editor projects!",
        body_extended: "In this legacy tutorial, learn how to use sounds in your legacy Wick Editor projects by adding them to your timeline and by using code!",
        tags: ["Beginner", "Sound", "Timeline"],
        image: legacyEditorTutorialThumbnail,
        embed: "https://www.youtube.com/embed/T08B0KkEAZA&t",
        number: "Legacy 2"
    },
    {
        title: "Legacy Editor | Sharing your projects",
        body: "Legacy Editor | Learn how to share your legacy Wick Editor projects on other websites!",
        body_extended: "In this legacy tutorial, learn how to share your legacy Wick Editor projects on other websites like Newgrounds.com, Itch.io, and more!",
        tags: ["Beginner", "Sharing", "Newgrounds"],
        image: legacyEditorTutorialThumbnail,
        embed: "https://www.youtube.com/embed/IpF8fMXN6To&t",
        number: "Legacy 3"
    }
];

export const news = [
    {
        title: "Support the Wick Editor Patreon!",
        text: "Become a supporter and help the Wick Editor developers!",
        date: "02/15/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/support-the-wick-editor-on-patreon/1072")
    },
    {
        title: "Wick Editor Alpha update v8.6",
        text: "Check out our updates for the Newgrounds Game Jam!",
        date: "05/30/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/new-wick-editor-alpha-update-v8-6/1608")
    },
    {
        title: "Mozilla Supports the Wick Editor!",
        text: "The Mozilla Foundation supports the Wick Editor with a grant!",
        date: "10/15/18",
        onClick: () => window.open("https://www.cmu.edu/news/stories/archives/2018/october/wick-editor.html")
    }
];

/*
* Community Projects
* Required Properties
* author {string} Author's name
* projectName {string} Project's Name
* projectImage {imgSource} The source of the image to display for the project.
* description {string} A short description of the project.
* instructions {string} Optional: A list of instructions for the game.
* src: {string} Embeddable source for the project.
* type: {string} One of Video, Interactive, Gif
* tags: {string[]} A list of tags associated with the project, can include animation, game, interactive, art, or custom tags.
* res {number[]} A array with two values representing the width and height of the embed.
*/

export const communityProjects = [
    {
        author: "Peter Sheehan",
        projectName: "Lock Up Dungeon",
        projectImage: img_lockUp,
        description: "Lock all the doors in the dungeon and allow the minotaur to finally rest.",
        src: "https://itch.io/embed-upload/1559006?color=333333", 
        instructions: "Controls:\nX: Ram \n\n WASD: Movement",
        res: [1,1], 
    },
    {
        author: "Kate Chaudoin",
        projectName: "Good Eggs",
        projectImage: img_goodEggs,
        description: "The story of a good egg just havin' a good time.",
        src: "https://www.youtube.com/embed/okMQGBEuroo", 
    },
    {
        author: "Nick Diamant",
        projectName: "Click Me If You Can",
        projectImage: img_clickMeIfYouCan,
        description: "Follow a curious cat around the globe!",
        src: "https://itch.io/embed-upload/1559077?color=333333", 
    },
];

