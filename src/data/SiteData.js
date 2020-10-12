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
import img_advancedTextTutorial from '../Images/Tutorials/advancedTextTutorial_site.png';
import img_textWithCode from '../Images/Tutorials/controllingTextWithCode_site.png';
import img_makingInteractiveButtons from '../Images/Tutorials/makingInteractiveButtons_site.png';
import img_addingSoundsToAnimation from '../Images/Tutorials/addingSoundsToAnimation_site.png';
import img_addingSoundsWithCode from '../Images/Tutorials/addingSoundsWithCode_site.png';
import img_controllingTheCanvas from '../Images/Tutorials/controllingTheCanvas_site.png';
import img_mouseEvents from '../Images/Tutorials/mouseEvents_site.png';
import img_whatsATween from '../Images/Tutorials/whatsATween_site.png';
import img_usingImagesInProjects from '../Images/Tutorials/usingImagesInProjects_site.png';
import img_advancedToolSettings from '../Images/Tutorials/advancedToolSettings_site.png';
import img_followTheMouse from '../Images/Tutorials/followingTheMouse_site.png';



// Community Projects
import img_goodEggs from '../Images/Community/goodEggs.png';
import img_lockUp from '../Images/Community/lockUpDungeon.png';
import img_clickMeIfYouCan from '../Images/Community/clickMeIfYouCan.png';
import img_happyApples from '../Images/Community/happyApples.png';
import img_bunnyTunnels from '../Images/Community/bunnyTunnels.png';
import img_hermanos from '../Images/Community/hermanos.png';
import img_theInspirator from '../Images/Community/theInspirator.png';

// Support Us progress bar and goals
export const supportData = {patreonProgress: 205.96,
                            patreonGoal: 1000, 
                            githubProgress: 1, 
                            githubGoal: 10};

export const examples = [
    {
        title: "Follow Mouse",
        exampleName: "followMouse",
        body: "See how you can get your character to follow your mouse movements around the screen!",
        body_extended: "Have a character follow the mouse around the screen using an 'Update' event!",
        tags: ["Beginner", "Interactive", "Mouse"],
        image: followMouse,
        number: "Example 1"
    },
    {
        title: "Multiple Rooms",
        exampleName: "multipleRooms",
        body: "Learn how to create a project with multiple rooms for a point and click game!",
        body_extended: "Set up the basic structure for a point and click adventure game with this multi-room example. Clicking a button sends you to a unique room.",
        tags: ["Beginner", "Interactive", "Mouse", "Buttons"],
        image: multipleRooms,
        number: "Example 2"
    },
    {
        title: "Drag and Drop",
        exampleName: "dragAndDrop",
        body: "Learn how to drag characters and items around the screen.",
        body_extended: "Using the 'MouseDrag' event, we can move characters around the screen by clicking and dragging.",
        tags: ["Beginner", "Interactive", "Mouse"],
        image: dragAndDrop,
        number: "Example 3"
    },
    {
        title: "Playing the Timeline",
        exampleName: "playingTheTimeline",
        body: "Learn how to control the main timeline with a button.",
        body_extended: "Control the timeline using a button! When the play button is pressed, the main timeline plays.",
        tags: ["Beginner", "Interactive", "Timeline", "Buttons"],
        image: playingTheTimeline,
        number: "Example 4"
    },
    {
        title: "Playing Clips",
        exampleName: "playingClips",
        body: "Learn how to control the timeline of a clip.",
        body_extended: "Control clip timelines using a button! Each character has their own button that controls their timeline.",
        tags: ["Intermediate", "Interactive", "Timeline", "Buttons"],
        image: playingClips,
        number: "Example 5"
    },
    {
        title: "Popups",
        exampleName: "popups",
        body: "Learn how to make a popup in an interactive game.",
        body_extended: "A basic popup example using clips and buttons. By combining the two, we get an interactive, toggleable, chat bubble.",
        tags: ["Intermediate", "Interactive", "Buttons"],
        image: popups,
        number: "Example 6"
    },
    {
        title: "Clicker Game",
        exampleName: "biscuitDestroyer",
        body: "An interactive clicker game that keeps track of how many times a button is clicked.",
        body_extended: "An interactive clicker game where a player can try to rack up as many points as possible before time runs out!",
        tags: ["Intermediate", "Interactive", "Mouse", "Buttons"],
        image: clickerGame,
        number: "Example 7"
    },
    {
        title: "Haunted House",
        exampleName: "hauntedHouse",
        body: "A simple example of a point-and-click adventure game.",
        body_extended: "On a stormy night there is a haunted house... do you dare enter?",
        tags: ["Intermediate", "Interactive", "Sound", "Buttons"],
        image: hauntedHouse,
        number: "Example 8"
    },
    {
        title: "Well-Dressed Ghost",
        exampleName: "wellDressedGhost",
        body: "A simple example of a dress-up game.",
        body_extended: "Put some clothes on this ghost! Select from hats, wigs, noses, mouth, and more.",
        tags: ["Intermediate", "Interactive", "Buttons"],
        image: wellDressedGhost,
        number: "Example 9"
    },
    {
        title: "DJ Spookyman",
        exampleName: "DJSpookyman",
        body: "A simple example of a soundboard project.",
        body_extended: "DJ Spookyman is in the house! Press the buttons and drop a sick beat!",
        tags: ["Intermediate", "Interactive", "Sound", "Buttons"],
        image: DJSpookyman,
        number: "Example 10"
    },
    {
        title: "More Examples Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Examples!",
        image: comingsoon,
        number: "Example 11",
        tags: [],
        disabled: true,
    },
];

export const tutorials = [
    {
        title: "Getting Started with Animation | Editor 1.0",
        body: "Learn how to use the new Wick Editor 1.0 to create animations and navigate the new interface!",
        body_extended: "Learn how to use the new Wick Editor 1.0 to create animations and navigate the new interface! Learn how the new toolbar, inspector and timeline work, and see our new settings menu.",
        tags: ["Beginner", "Animation", "Tools"],
        image: img_gettingStartedWithAnimation,
        embed: "https://youtube.com/embed/pAsrXT8KIrI",
        number: "1.0 Tutorial 1"
    },
    {
        title: "Making Things Interactive | Editor 1.0",
        body: "In this Wick Editor 1.0 tutorial we create an interactive point and click game and learn about scripting!",
        body_extended: "Learn how to use the new Wick Editor 1.0 to create an interactive point and click game. We'll learn about the tab coding system, how to name a frame, gotoAndStop, and the single-tab coding system.",
        tags: ["Beginner", "Interactive", "Mouse"],
        image: img_makingInteractiveProjects,
        embed: "https://youtube.com/embed/cvANBF43KsY",
        number: "1.0 Tutorial 2"
    },
    {
        title: "Using Keyboard Interactions | Editor 1.0",
        body: "Learn how to use the keyboard in your interactive Wick Editor 1.0 projects!",
        body_extended: "In this Wick Editor 1.0 tutorial, we learn how to use keyboard controls in our interactive projects. We'll go over the basics of keyboard events, conditionals, and moving objects in x,y space!",
        tags: ["Beginner", "Interactive", "Keyboard"],
        image: img_usingKeyboardInteractions,
        embed: "https://youtube.com/embed/mpJOY1-qshU",
        number: "1.0 Tutorial 3"
    },
    {
        title: "Using Advanced Text Settings | Editor 1.0",
        body: "Learn how to use the advanced text settings in Wick Editor 1.0 projects!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to use advanced text settings such as changing the font, text size, text style and more!",
        tags: ["Beginner", "Text"],
        image: img_advancedTextTutorial,
        embed: "https://www.youtube.com/embed/vw6z_72o_uA",
        number: "1.0 Tutorial 4"
    },
    {
        title: "Controlling Text with Code | Editor 1.0",
        body: "Learn how to use code to interactively update a text box!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to control text objects with code to change their contents dynamically!",
        tags: ["Intermediate", "Interative", "Text"],
        image: img_textWithCode,
        embed: "https://www.youtube.com/embed/baNjzbfE_I8",
        number: "1.0 Tutorial 5"
    },
    {
        title: "Making Interactive Buttons | Editor 1.0",
        body: "Learn how to create interactive buttons in your projects!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to create dynamic interactive buttons with hover, active and down states!",
        tags: ["Intermediate", "Interactive", "Buttons"],
        image: img_makingInteractiveButtons,
        embed: "https://www.youtube.com/embed/E4uNy6jgXp8",
        number: "1.0 Tutorial 6"
    },
    {
        title: "Adding Sounds to Animations | Editor 1.0",
        body: "Learn how to add sounds to animations using the timeline!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to upload and use sounds in your animations by using the asset library and the timeline!",
        tags: ["Intermediate", "Animation", "Sound"],
        image: img_addingSoundsToAnimation,
        embed: "https://www.youtube.com/embed/CzgDiU2P2Oo",
        number: "1.0 Tutorial 7"
    },
    {
        title: "Adding Sounds with Code | Editor 1.0",
        body: "Learn how to add sounds to games and interactive projects using code!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to upload and use sounds in your games by using the playSound() command in code!",
        tags: ["Intermediate", "Interactive", "Sound"],
        image: img_addingSoundsWithCode,
        embed: "https://www.youtube.com/embed/V-wiuJPEbKs",
        number: "1.0 Tutorial 8"
    },
    {
        title: "Controlling the Canvas | Editor 1.0",
        body: "Learn how to control the canvas while making games and animations!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to control the canvas using the pan, zoom, onion skinning, and recenter tools!",
        tags: ["Intermediate", "Canvas", "Tools"],
        image: img_controllingTheCanvas,
        embed: "https://www.youtube.com/embed/6UtRPX0eUZU",
        number: "1.0 Tutorial 9"
    },
    {
        title: "Using Mouse Interactions | Editor 1.0",
        body: "Learn how to use all of the different mouse interactions in your projects!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to use all 8 of the different mouse events including mousePressed, mouseReleased, mouseHover and more!",
        tags: ["Intermediate", "Interactive", "Mouse"],
        image: img_mouseEvents,
        embed: "https://www.youtube.com/embed/uNcSZQds6C0",
        number: "1.0 Tutorial 10"
    },
    {
        title: "Using Tweens in Animation | Editor 1.0",
        body: "Learn how to use tweens to create smooth animations!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to use tweening on extended frames! Tweening allows Wick Editor to automatically animatie movement, size, opacity and rotation changes!",
        tags: ["Intermediate", "Animation", "Tween"],
        image: img_whatsATween,
        embed: "https://www.youtube.com/embed/fiTimi02PEg",
        number: "1.0 Tutorial 11"
    },
    {
        title: "Using Images in Projects | Editor 1.0",
        body: "Learn how to import and use images in your animations and games!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to import images for animations, games and interactive projects!",
        tags: ["Intermediate", "Animation", "Images"],
        image: img_usingImagesInProjects,
        embed: "https://www.youtube.com/embed/EvlqBiD79Us",
        number: "1.0 Tutorial 12"
    },
    {
        title: "Advanced Tool Settings | Editor 1.0",
        body: "Learn how to use all the advanced tool settings on the toolbar!",
        body_extended: "In this Wick Editor 1.0 tutorial, learn how to use all of the advanced tool settings for the tools in the Wick Editor!",
        tags: ["Intermediate", "Tools"],
        image: img_advancedToolSettings,
        embed: "https://www.youtube.com/embed/7JQlKDADlOs",
        number: "1.0 Tutorial 13"
    },
    {
        title: "Following the Mouse | Editor 1.0",
        body: "Learn how to create an animated character that follows the mouse!",
        body_extended: "In this Wick Editor Tutorial, learn how to create an animated character that follows the movements of the mouse!",
        tags: ["Beginner", "Interactive", "Mouse"],
        image: img_followTheMouse,
        embed: "https://www.youtube.com/embed/r9j-3Ka09U8",
        number: "1.0 Tutorial 14"
    },
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
        tags: ["Legacy", "Beginner", "Sound"],
        image: legacyEditorTutorialThumbnail,
        embed: "https://www.youtube.com/embed/T08B0KkEAZA&t",
        number: "Legacy 2"
    },
    {
        title: "Legacy Editor | Sharing your projects",
        body: "Legacy Editor | Learn how to share your legacy Wick Editor projects on other websites!",
        body_extended: "In this legacy tutorial, learn how to share your legacy Wick Editor projects on other websites like Newgrounds.com, Itch.io, and more!",
        tags: ["Legacy", "Beginner"],
        image: legacyEditorTutorialThumbnail,
        embed: "https://www.youtube.com/embed/IpF8fMXN6To&t",
        number: "Legacy 3"
    }
];

export const news = [
    {
        title: "Support the Wick Editor Patreon!",
        text: "Become a supporter and help the Wick Editor developers!",
        date: "2/15/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/support-the-wick-editor-on-patreon/1072")
    },
    {
        title: "Wrapping A Successful Mozilla Grant!",
        text: "We've concluded our Mozilla Open Source Support Grant. Read about it here!",
        date: "8/8/19",
        onClick: () => window.open("https://medium.com/@lucadamasco/the-wick-editor-is-wrapping-up-our-mozilla-open-source-support-grant-7289ca7c8ba2")
    },
    {
        title: "Mozilla Supports the Wick Editor!",
        text: "The Mozilla Foundation supports the Wick Editor with a grant!",
        date: "10/15/18",
        onClick: () => window.open("https://www.cmu.edu/news/stories/archives/2018/october/wick-editor.html")
    }
];

/*
* Reference Page

*/
export const referenceItems = [
    {group:"Timeline",
    name: "play",
    type: "Function",
    description: "Plays the parent timeline that the current object belongs to.",
    snippet: "// on frame 1, in Default script\nplay();",
    syntax: "play()",
    parameters: []
    },
    {group:"Timeline",
    name: "stop",
    type: "Function",
    description: "Stops the parent timeline that the current object belongs to.",
    snippet: "// on frame 1, in Default script\nstop();",
    syntax: "stop()",
    parameters: []
    }, 
    {group:"Timeline",
    name: "gotoAndPlay",
    type: "Function",
    description: "Moves the playhead to a specified frame on the timeline that the current object belongs to, and plays that timeline. Takes in an integer that corresponds to a frame number.",
    snippet: "// on arrow object, in Mouseclick script\ngotoAndPlay(2);",
    syntax: "gotoAndPlay(frame)",
    parameters: [{name:"frame", type: [{name: "number", description: "integer that corresponds to a frame number"}, {name: "string", description: "name of a named frame, in quotes"}]}]
    }, 
    {group:"Timeline",
    name: "gotoAndStop",
    type: "Function",
    description: "Moves the playhead to a specified frame on the timeline that the current object belongs to, and plays that timeline. Takes in an integer that corresponds to a frame number.",
    snippet: "// on arrow object, in Mouseclick script\ngotoAndStop(2);",
    syntax: "gotoAndStop(frame)",
    parameters: [{name:"frame", type: [{name: "number", description: "integer that corresponds to a frame number"}, {name: "string", description: "name of a named frame, in quotes"}]}]
    }, 
    {group:"Timeline",
    name: "gotoNextFrame",
    type: "Function",
    description: "Moves the playhead to the next frame on the timeline that the current object belongs to.",
    snippet: "// on frame 1 arrow object, in Mouseclick script\ngotoNextFrame();",
    syntax: "gotoNextFrame()",
    parameters: []
    }, 
    {group:"Timeline",
    name: "gotoPrevFrame",
    type: "Function",
    description: "Moves the playhead to the previous frame on the timeline that the current object belongs to.",
    snippet: "// on frame 2 arrow object, in Mouseclick script\ngotoPrevFrame();",
    syntax: "gotoPrevFrame()",
    parameters: []
    },

    {group:"Object",
    name: "x",
    type: "Property",
    description: "The x position of the object. (Left to Right)",
    snippet: "// on ghost object, in Update script\nthis.x = mouseX;\nthis.y = mouseY;",
    syntax: "this.x",
    parameters: []
    }, 
    {group:"Object",
    name: "y",
    type: "Property",
    description: "The y position of the object. (Up to Down)",
    snippet: "// on ghost object, in Update script\nthis.x = mouseX;\nthis.y = mouseY;",
    syntax: "this.y",
    parameters: []
    }, 
    {group:"Object",
    name: "width",
    type: "Property",
    description: "The width of the object.",
    snippet: "// on ghost object, in Update script\nthis.width = mouseX;\nthis.height = mouseY;",
    syntax: "this.width",
    parameters: []
    },
    {group:"Object",
    name: "height",
    type: "Property",
    description: "The height of the object.",
    snippet: "// on ghost object, in Update script\nthis.width = mouseX;\nthis.height = mouseY;",
    syntax: "this.height",
    parameters: []
    }, 
    {group:"Object",
    name: "scaleX",
    type: "Property",
    description: "The scale of the object on the x-axis.",
    snippet: "// on ghost object, in Mouseclick script\nthis.scaleX += 0.1;\nthis.scaleY += 0.1;",
    syntax: "this.scaleX",
    parameters: []
    }, 
    {group:"Object",
    name: "scaleY",
    type: "Property",
    description: "The scale of the object on the y-axis.",
    snippet: "// on ghost object, in Mouseclick script\nthis.scaleX += 0.1;\nthis.scaleY += 0.1;",
    syntax: "this.scaleY",
    parameters: []
    }, 
    {group:"Object",
    name: "rotation",
    type: "Property",
    description: "The rotation of the object.",
    snippet: "// on ghost object, in Mouseclick script\nthis.rotation += 100;",
    syntax: "this.rotation",
    parameters: []
    }, 
    {group:"Object",
    name: "opacity",
    type: "Property",
    description: "The opacity of the object. 0 is completely transparent, 1 is completely opaque.",
    snippet: "// on ghost object, in Mouseclick script\nthis.opacity -= 0.1;",
    syntax: "this.opacity",
    parameters: []
    }, 
    {group:"Object",
    name: "parent",
    type: "Object",
    description: "Returns the object that owns the calling object.",
    snippet: "// on mouth object, in Mouseclick script\nparent.x = random.integer(0, project.width);",
    syntax: "parent",
    parameters: []
    }, 
    {group:"Object",
    name: "clone",
    type: "Function",
    description: "Creates a clone of this object, places it on the same frame, and returns a reference to it.",   
    snippet: "// on clone_button object, in Mouseclick script\nlet circleClone = circle.clone();\ncircleClone.x = random.integer(0, project.width);\ncircleClone.y = random.integer(0, project.height);",
    syntax: "this.clone()",
    parameters: []
    }, 
    {group:"Object",
    name: "clones",
    type: "Array",
    description: "An array of every clone of an object.",
    snippet: "// on move_button object, in Mouseclick script\nfor (let i=0; i<circle.clones.length; i++){\n    circle.clones[i].x += random.integer(-50, 50);\n}",
    syntax: "this.clones",
    parameters: [{name:"frame", type: [{name: "number", description: "integer that corresponds to a frame number"}, {name: "string", description: "name of a named frame, in quotes"}]}]
    }, 
    {group:"Object",
    name: "remove",
    type: "Function",
    description: "Removes this object from the project.",
    snippet: "// on ghost object, in Mouseclick script\nthis.remove();",
    syntax: "this.remove()",
    parameters: []
    }, 
    {group:"Object",
    name: "setText",
    type: "Function",
    description: "Changes the content of a text object.",
    snippet: '// on ghost object, in Mouseclick script\ntext.setText("Hello!");',
    syntax: 'textName.setText(text)',
    parameters: [{name:"text", type: [{name: "string", description: "the string that the orginal text is changing into, in quotes."}]}]
    }, 
    {group:"Object",
    name: "hitTest",
    //deprecated: "Note: this function is deprecated in Wick Editor 1.18, please use hits() instead.",
    type: "Function",
    description: "Determines if the hitboxes of two objects overlap.",
    snippet: "// on ghost object. in Update script,\nif (this.hitTest(box)) {\n    this.x = random.integer(0, project.width);\n}",
    syntax: "this.hitTest(that)",
    parameters: [{name:"that", type: [{name: "object", description: "the object to be tested against collision"}]}]
    }, 
    {group:"Object",
    name: "if (hitTest)",
    //deprecated: "Note: this function is deprecated in Wick Editor 1.18, please use hits() instead.",
    type: "Statement",
    description: "Runs some custom code when the two objects tested are hitting each other.",
    snippet: "// on ghost object. in Update script,\nif (this.hitTest(box)) {\n    this.x = random.integer(0, project.width);\n}",
    syntax: "if (this.hitTest(that)) {\n    //Add your code here!}",
    parameters: [{name:"that", type: [{name: "object", description: "the object to be tested against collision"}]}]
    },
    /*
    {group:"Object",
    name: "hits",
    type: "Function",
    description: "Function: Determines if the hitboxes of two objects overlap.",
    snippet: ["this.hits(that);", 
              "let hitInfo = this.hits(that, {overlap: true});\nif (hitInfo){\n    this.x -= hitInfo.overlapX;\n    this.y -= hitInfo.overlapY;\n}"],
    syntax: "this.hits(that, options)",
    parameters: [{name:"that", type: [{name: "object", description: "the object to be tested against collision"}]},
                 {name:"options", optional: true, type: [{name: "object", description: "options for testing collision between the two specified objects, includes {mode: hitMode, overlap: overlapOn, offset: offsetOn}"}]},
                 {name:"hitMode", optional: true, type: [{name: "string", description: 'the mode of the hit box, can be "CIRCLE", "RECT" or "CONVEX". Default is "CIRCLE".'}]},
                 {name:"overlapOn", optional: true, type: [{name: "boolean", description: 'determines if overlap data is returned, includes overlapX and overlapY. Can be true or false. Default is false.'}]},
                 {name:"offsetOn", optional: true, type: [{name: "boolean", description: 'determines if offset data is returned, includes offsetX and offsetY. Can be true or false. Default is false.'}]},
                ]
    },
    {group:"Object",
    name: "hitTestOptions",
    type: "Function",
    description: "Function: set the global options of hit tests, including mode, overlap and offset.",
    snippet: ["this.hits(that);", 
              "let hitInfo = this.hits(that, {overlap: true});\nif (hitInfo){\n    this.x -= hitInfo.overlapX;\n    this.y -= hitInfo.overlapY;\n}"],
    syntax: "hitTestOptions(options)",
    parameters: [{name:"options", optional: true, type: [{name: "object", description: "options for testing all later declared hit tests in the project unless specified otherwise, includes {mode: hitMode, overlap: overlapOn, offset: offsetOn}"}]},
                 {name:"hitMode", optional: true, type: [{name: "string", description: 'the mode of the hit box, can be "CIRCLE", "RECT" or "CONVEX". Default is "CIRCLE".'}]},
                 {name:"overlapOn", optional: true, type: [{name: "boolean", description: 'determines if overlap data is returned, includes overlapX and overlapY. Can be true or false. Default is false.'}]},
                 {name:"offsetOn", optional: true, type: [{name: "boolean", description: 'determines if offset data is returned, includes offsetX and offsetY. Can be true or false. Default is false.'}]},
                ]
    },
    */

    {group:"Input",
    name: "mouseX",
    type: "Property",
    description: "The x position of the mouse on the screen.",
    snippet: "// on ghost object, in Update script\nthis.x = mouseX;\nthis.y = mouseY;",
    syntax: "mouseX",
    parameters: []
    }, 
    {group:"Input",
    name: "mouseY",
    type: "Property",
    description: "The y position of the mouse on the screen.",
    snippet: "// on ghost object, in Update script\nthis.x = mouseX;\nthis.y = mouseY;",
    syntax: "mouseY",
    parameters: []
    },
    {group:"Input",
    name: "mouseMoveX",
    type: "Property",
    description: "The amount the mouse moved on the x-axis in the last tick.",
    snippet: "// on ghost object, in Update script\nthis.x += mouseMoveX/10;\nthis.y += mouseMoveY/10;",
    syntax: "mouseMoveX",
    parameters: []
    },
    {group:"Input",
    name: "mouseMoveY",
    type: "Property",
    description: "The amount the mouse moved on the y-axis in the last tick.",
    snippet: "// on ghost object, in Update script\nthis.x += mouseMoveX/10;\nthis.y += mouseMoveY/10;",
    syntax: "mouseMoveY",
    parameters: []
    },
    {group:"Input",
    name: "key",
    type: "Property",
    description: "The last key pressed.",
    snippet: "// on frame 1, in Keypressed script\ntext.setText(key);",
    syntax: "key",
    parameters: []
    },
    {group:"Input",
    name: "keys",
    type: "Array",
    description: "An array of all keys which are currently pressed down.",
    snippet: "// on frame 1, in Keypressed script\ntext.setText(keys.toString());",
    syntax: "keys",
    parameters: []
    },
    {group:"Input",
    name: "isMouseDown",
    type: "Function",
    description: "Returns true if the mouse is currently pressed down.",
    snippet: "// on frame 1, in Update script\nif (isMouseDown()) {\n    ghost.x += 1;\n}",
    syntax: "isMouseDown()",
    parameters: []
    },
    {group:"Input",
    name: "isKeyDown",
    type: "Function",
    description: "Returns true if the given key is currently down.",
    snippet: '// on frame 1, in Update script\nif (isKeyDown("a")) {\n    ghost.x += 1;\n}',
    syntax: "isKeyDown(keyCode)",
    parameters: [{name:"keyCode", type: [{name: "string", description: "the key to be checked, in quotes"}]}]
    },
    {group:"Input",
    name: "isKeyJustPressed",
    type: "Function",
    description: "Returns true if the given key was pressed within the last tick.",
    snippet: '// on frame 1, in Update script\nif (isKeyJustPressed("a")) {\n    ghost.x += 10;\n}',
    syntax: "isKeyJustPressed(keyCode)",
    parameters: [{name:"keyCode", type: [{name: "string", description: "the key to be checked, in quotes"}]}]
    },
    {group:"Input",
    name: "if (key)",
    type: "Statement",
    description: "Runs if the last key pressed is equal to the letter, or symbol, tested in the condition.",
    snippet: '// on frame 1, in Update script\nif (key === "a") {\n    ghost.x += 10;\n}',
    syntax: 'if (key === keyCode) {// Add your code here.}',
    parameters: [{name:"keyCode", type: [{name: "string", description: "the key to be checked, in quotes"}]}]
    },
    {group:"Input",
    name: "hideCursor",
    type: "Function",
    description: "Hides the cursor.",
    snippet: "// on ghost object, in Mouseenter script\nhideCursor();",
    syntax: "hideCursor()",
    parameters: []
    },
    {group:"Input",
    name: "showCursor",
    type: "Function",
    description: "Unhides the cursor.",
    snippet: "// on ghost object, in Mouseleave script\nshowCursor();",
    syntax: "showCursor()",
    parameters: []
    },

    {group:"Project",
    name: "project.width",
    type: "Property", 
    description: "The width of the project canvas.",
    snippet: "// on frame 1, in Mouseclick script\nghost.x = random.integer(0, project.width);\nghost.y = random.integer(0, project.height);",
    syntax: "project.width",
    parameters: []
    },
    {group:"Project",
    name: "project.height",
    type: "Property", 
    description: "The height of the project canvas.",
    snippet: "// on frame 1, in Mouseclick script\nghost.x = random.integer(0, project.width);\nghost.y = random.integer(0, project.height);",
    syntax: "project.height",
    parameters: []
    },
    {group:"Project",
    name: "project.framerate",
    type: "Property", 
    description: "The framerate of the project.",
    snippet: "// on frame 1, in Update script\nframeratetext.setText(project.framerate);",
    syntax: "project.framerate",
    parameters: []
    },

    {group:"Random",
    name: "random.integer",
    type: "Function", 
    description: "Returns a random whole number between a minimum and maximum.",
    snippet: "// on frame 1, in Mouseclick script\nghost.x = random.integer(0, project.width);\nghost.y = random.integer(0, project.height);",
    syntax: "random.integer(min, max)",
    parameters: [{name:"min", type: [{name: "number", description: "the minumum number to generate a random integer"}]}, 
                {name:"max", type: [{name: "number", description: "the maximum number to generate a random integer"}]}]
    },
    {group:"Random", 
    name: "random.float",
    type: "Function", 
    description: "Returns a random decimal number between a minimum and maximum.",
    snippet: "// on frame 1, in Mouseclick script\nghost.x = random.float(0, project.width);\nghost.y = random.float(0, project.height);",
    syntax: "random.float(min, max)",
    parameters: [{name:"min", type: [{name: "number", description: "the minumum number to generate a random decimal number"}]}, 
                {name:"max", type: [{name: "number", description: "the maximum number to generate a random decimal number"}]}]
    },
    {group:"Random", 
    name: "random.choice",
    type: "Function", 
    description: "Returns a random item in the given array.",
    snippet: '// on button object, in Mouseclick script\nlet fruits = ["apple", "orange", "banana"];\nfruittext.setText(random.choice(fruits));',
    syntax: "random.choice(array)",
    parameters: [{name:"array", type: [{name: "array", description: "an array in which one element is randomly selected"}]}]
    },

    {group:"Sound",
    name: "playSound",
    type: "Function", 
    description: "Plays a sound in the asset library.",
    snippet: '// on play button object, in Mouseclick script\nplaySound("music.wav");',
    syntax: "playSound(assetName)",
    parameters: [{name:"assetName", type: [{name: "string", description: "name of an audio asset, in quotes"}]}]
    },
    {group:"Sound",
    name: "stopAllSounds",
    type: "Function", 
    description: "Stops all currently playing sounds.",
    snippet: '// on stop button object, in Mouseclick script\nstopAllSounds();',
    syntax: "stopAllSounds()",
    parameters: []
    },

    {group:"Event",
    name: "mouseclick",
    type: "Event",
    description: "Once, when the mouse goes down then up over an object.",
    snippet: "// on ghost object, in Load script\nonEvent('mouseclick', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mouseclick', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mousedown",
    type: "Event",
    description: "Every tick, when the mouse is down on the object.",
    snippet: "// on ghost object, in Load script\nonEvent('mousedown', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mousedown', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mousedrag",
    type: "Event",
    description: "Every tick, when the mouse moves while down.",
    snippet: "// on ghost object, in Load script\nonEvent('mousedrag', function () {\n    this.x = mouseX;\n    this.y = mouseY;\n});",
    syntax: "onEvent('mousedrag', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mouseenter",
    type: "Event",
    description: "Once, when the mouse enters the object.",
    snippet: "// on ghost object, in Load script\nonEvent('mouseenter', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mouseenter', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mousehover",
    type: "Event",
    description: "Every tick, when the mouse is over the object.",
    snippet: "// on ghost object, in Load script\nonEvent('mousehover', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mousehover', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mouseleave",
    type: "Event",
    description: "Once, when the mouse leaves the object.",
    snippet: "// on ghost object, in Load script\nonEvent('mouseleave', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mouseleave', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mousepressed",
    type: "Event",
    description: "Once, when the mouse presses down on the object.",
    snippet: "// on ghost object, in Load script\nonEvent('mousepressed', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mousepressed', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "mousereleased",
    type: "Event",
    description: "Once, when the mouse is released over the object.",
    snippet: "// on ghost object, in Load script\nonEvent('mousereleased', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('mousereleased', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "keypressed",
    type: "Event",
    description: "Once, when any key is pushed down.",
    snippet: "// on ghost object, in Load script\nonEvent('keypressed', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('keypressed', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "keyreleased",
    type: "Event",
    description: "Once, when any key is released.",
    snippet: "// on ghost object, in Load script\nonEvent('keyreleased', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('keyreleased', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "keydown",
    type: "Event",
    description: "Every tick, when any key is down.",
    snippet: "// on ghost object, in Load script\nonEvent('keydown', function () {\n    this.rotation += 10;\n});",
    syntax: "onEvent('keydown', function () {    //Add code here!});",
    parameters: []
    },
    {group:"Event",
    name: "load",
    type: "Event",
    description: "Once, when the frame is entered.",
    snippet: "// on frame 1, in Default script\nonEvent('load', function () {\n    project.score = 0;\n});",
    syntax: "onEvent('load', function () {    //Add code here!});",
    parameters: []
    },
    // {group:"Event",
    // name: "unload",
    // type: "Event",
    // description: "Once, when the frame is exited.",
    // snippet: "",
    // syntax: "onEvent('unload', function () {//Add code here!});",
    // parameters: []
    // },
    {group:"Event",
    name: "update",
    type: "Event",
    description: "Every tick, while the project is playing.",
    snippet: "// on ghost object, in Load script\nonEvent('update', function () {\n     this.rotation += 10;\n});",
    syntax: "onEvent('update', function () {    //Add code here!});",
    parameters: []
    },

    {group:"Script",
    name: "Mouseenter",
    type: "Script",
    description: "Runs once, when the mouse enters the object.",
    snippet: "// on ghost object, in Mouseenter script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mouseleave",
    type: "Script",
    description: "Runs once, when the mouse leaves the object.",
    snippet: "// on ghost object, in Mouseleave script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mousehover",
    type: "Script",
    description: "Runs every tick, when the mouse is over the object.",
    snippet: "// on ghost object, in Mousehover script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mousepressed",
    type: "Script",
    description: "Runs once, when the mouse presses down on the object.",
    snippet: "// on ghost object, in Mousepressed script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mousedown",
    type: "Script",
    description: "Runs every tick, when the mouse is down on the object.",
    snippet: "// on ghost object, in Mousedown script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mousereleased",
    type: "Script",
    description: "Runs once, when the mouse is released over the object.",
    snippet: "// on ghost object, in Mousereleased script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mousedrag",
    type: "Script",
    description: "Runs every tick, when the mouse moves while down.",
    snippet: "// on ghost object, in Mousedrag script\nthis.x = mouseX;\nthis.y = mouseY;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Mouseclick",
    type: "Script",
    description: "Runs once, when the mouse goes down then up over the object.",
    snippet: "// on ghost object, in Mouseclick script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Keypressed",
    type: "Script",
    description: "Runs once, when any key is pushed down.",   
    snippet: "// on ghost object, in Keypressed script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Keyreleased",
    type: "Script",
    description: "Runs once, when any key is released.",
    snippet: "// on ghost object, in Keyreleased script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Keydown",
    type: "Script",
    description: "Runs every tick, when any key is down.",
    snippet: "// on ghost object, in Keydown script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Load",
    type: "Script",
    description: "Runs once, when the frame is entered.",
    snippet: "// on frame 1, in Load script\nproject.score = 0;",
    syntax: "",
    parameters: []
    },
    {group:"Script",
    name: "Update",
    type: "Script",
    description: "Runs every tick, while the project is playing.",
    snippet: "// on ghost object, in Update script\nthis.rotation += 10;",
    syntax: "",
    parameters: []
    },
    // {group:"Script",
    // name: "Unload",
    // type: "Script",
    // description: "Runs once, when the frame is exited.",
    // snippet: "",
    // syntax: "",
    // parameters: []
    // },
    {group:"Script",
    name: "Default",
    type: "Script",
    description: "Runs once, before all other scripts.",
    snippet: "// on frame 1, in Default script\nstop();",
    syntax: "",
    parameters: []
    }
]

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
        src: "https://itch.io/embed-upload/1586282?color=333333", 
    },
    {
        author: "Xavier Apostol",
        projectName: "Hermanos",
        projectImage: img_hermanos,
        description: "Two brothers, Raul and Chico, mourn among the stars.",
        src: "https://itch.io/embed-upload/1864672?color=333333", 
    },
    {
        author: "Lucia (9)",
        projectName: "Bunny Tunnels",
        projectImage: img_bunnyTunnels,
        description: "Guide your bunny friend to victory!",
        src: "https://itch.io/embed-upload/1590277?color=333333", 
    },
    {
        author: "Lucia (9)",
        projectName: "Happy Apples",
        projectImage: img_happyApples,
        description: "What's that? It's two happy apples!",
        src: "https://itch.io/embed-upload/1590280?color=333333", 
    },
    {
        author: "Luca Damasco",
        projectName: "The Inspirator",
        projectImage: img_theInspirator,
        description: "Time to get inspired!",
        src: "https://itch.io/embed-upload/1949334?color=333333", 
    }, 
];


