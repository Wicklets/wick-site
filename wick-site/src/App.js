/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    App.js

    Top-Level React Component
*/

import React, {Component} from 'react';
import Content from './Content.js';
import Footer from './Footer.js';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        // Website current page
        this.state = {
            active: "Home"
        };
    }

    handleClick = (page) => {this.setState({active: page});}

    render() {
        return(
            <div className="App">
                {/*<Header onClick={this.handleClick} />*/}
                <Content active={this.state.active} />
                <Footer />
            </div>
        );
    }
}

export default App;
