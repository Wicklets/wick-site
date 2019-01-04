/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    App.js

    Top-Level React Component
*/

import React, {Component} from 'react';

import Content from './Content.js';
import HeaderContainer from './NavBar/HeaderContainer.js';
import Footer from './Footer/Footer.js';
import PageTitleContainer from './ContentComponents/PageTitle/PageTitleContainer.js';

import './scss_styles/Wick.scss';
import './scss_styles/App.scss';

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
                <HeaderContainer
                    page={this.state.page}
                    onClickChangePage={this.handleClick}
                />
                <PageTitleContainer
                    page={this.state.page}
                />
                <Content page={this.state.page} />
                <Footer />
            </div>
        );
    }
};

export default App;
