/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickRouter.js

    Navigation Bar for website
*/

import React, {Fragment} from 'react';
import { Route, Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import HomePageContainer from '../../pages/home/HomePageContainer.js';
import AboutPageContainer from '../../pages/about/AboutPageContainer.js';
import LearnPageContainer from '../../pages/learn/LearnPageContainer.js';
import CommunityPageContainer from '../../pages/community/CommunityPageContainer.js';
import SupportersPageContainer from '../../pages/supporters/SupportersPageContainer.js';

import '../../scss_styles/WickRouter.scss';

const home = () => (<HomePageContainer />)
const about = () => (<AboutPageContainer />)
const learn = () => (<LearnPageContainer />)
const community = () => (<CommunityPageContainer />)
const supporters = () => (<SupportersPageContainer />)

const WickRouter = ({page, onClickCloseDropdown, onClickToggleDropdown, onClickLaunchEditor, backgroundAnimationClass, isDropdownOpen}) => (
    <Fragment>
        <div id="WickRouter-container">
            <Navbar light expand="sm">
                <div className={backgroundAnimationClass} />
                <NavbarBrand
                    tag={Link}
                    to="/"
                    id={(page === "/" ? "WickRouter-activeItem" : "")}
                    className="WickRouter-brand--narrow"
                    onClick={onClickCloseDropdown}
                >
                    wick editor
                </NavbarBrand>
                <NavbarToggler onClick={onClickToggleDropdown} />
                <Collapse isOpen={isDropdownOpen} navbar>
                    <Nav className="ml-auto mr-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/community/"
                                id={(page === "/community/" ? "WickRouter-activeItem" : "")}
                                className="WickRouter-navItem"
                                onClick={onClickCloseDropdown}
                            >
                                community
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/supporters/"
                                id={(page === "/supporters/" ? "WickRouter-activeItem" : "")}
                                className="WickRouter-navItem"
                                onClick={onClickCloseDropdown}
                            >
                                supporters
                            </NavLink>
                        </NavItem>
                        <NavbarBrand
                            tag={Link}
                            to="/"
                            id={(page === "/" ? "WickRouter-activeItem" : "")}
                            className="WickRouter-brand--wide"
                            onClick={onClickCloseDropdown}
                        >
                            wick editor
                        </NavbarBrand>
                        <NavItem>
                            <NavLink
                                href="#"
                                className="WickRouter-navItem"
                                onClick={onClickLaunchEditor}
                            >
                                create
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/learn/"
                                id={(page === "/learn/" ? "WickRouter-activeItem" : "")}
                                className="WickRouter-navItem"
                                onClick={onClickCloseDropdown}
                            >
                                learn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/about/"
                                id={(page === "/about/" ? "WickRouter-activeItem" : "")}
                                className="WickRouter-navItem"
                                onClick={onClickCloseDropdown}
                            >
                                about
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        {console.log(page)}
        <Route path="/" exact component={home} />
        <Route path="/about/" component={about} />
        <Route path="/learn/" component={learn} />
        <Route path="/community/" component={community} />
        <Route path="/supporters/" component={supporters} />
    </Fragment>
);

export default WickRouter;