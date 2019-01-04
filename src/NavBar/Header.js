/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Navigation Bar for website
*/

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import HomePageContainer from '../HomePage/HomePageContainer.js';
import AboutPageContainer from '../AboutPage/AboutPageContainer.js';
import LearnPageContainer from '../LearnPage/LearnPageContainer.js';
import CommunityPageContainer from '../CommunityPage/CommunityPageContainer.js'

import '../scss_styles/Header.scss';

const home = () => (<HomePageContainer />)
const about = () => (<AboutPageContainer />)
const learn = () => (<LearnPageContainer />)
const community = () => (<CommunityPageContainer />)


const Header = ({page, onClickChangePage, onClickToggleDropdown, onClickLaunchEditor, backgroundAnimationClass, isDropdownOpen}) => (
    <Router>
        <div>
        <div id="Header-container">
            <Navbar light expand="sm">
                <div className={backgroundAnimationClass} />
                <NavbarBrand
                    tag={Link}
                    to="/"
                    id={(page === "home" ? "Header-activeItem" : "")}
                    className="Header-brand--narrow"
                    onClick={() => onClickChangePage("home")}
                >
                    wick editor
                </NavbarBrand>
                <NavbarToggler onClick={onClickToggleDropdown} />
                <Collapse isOpen={isDropdownOpen} navbar>
                    <Nav className="ml-auto mr-auto" navbar>

                        <NavbarBrand
                            tag={Link}
                            to="/"
                            id={(page === "home" ? "Header-activeItem" : "")}
                            className="Header-brand--wide"
                            onClick={() => onClickChangePage("home")}
                        >
                            wick editor
                        </NavbarBrand>

                        <NavItem>
                            <NavLink
                                href="#"
                                id={(page === "create" ? "Header-activeItem" : "")}
                                className="Header-navItem"
                                onClick={onClickLaunchEditor}
                            >
                                create
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/learn/"
                                id={(page === "learn" ? "Header-activeItem" : "")}
                                className="Header-navItem"
                                onClick={() => onClickChangePage("learn")}
                            >
                                learn
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/about/"
                                id={(page === "about" ? "Header-activeItem" : "")}
                                className="Header-navItem"
                                onClick={() => onClickChangePage("about")}
                            >
                                about
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/community/"
                                id={(page === "community" ? "Header-activeItem" : "")}
                                className="Header-navItem"
                                onClick={() => onClickChangePage("community")}
                            >
                                community
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        <Route path="/" exact component={home} />
        <Route path="/about/" component={about} />
        <Route path="/learn/" component={learn} />
        <Route path="/community/" component={community} />
        </div>
    </Router>
);

export default Header;