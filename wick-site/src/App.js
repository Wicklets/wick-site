/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    App.js

    Top-Level React Component
*/

import React, {Component} from 'react';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        // Website current page
        this.state = {
            page: "home"
        };
    }

    handleClick = (page) => {this.setState({page})}

    render() {
        return(
            <div className="App">
                <Header
                    page={this.state.page}
                    onClick={this.handleClick}
                />
                <Content page={this.state.page} />
                <Footer />
            </div>
        );
    }
}

export default App;
