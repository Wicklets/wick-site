/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickRouter.js

    Navigation Bar for website
*/

import React, { Fragment } from 'react';
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
import CookiePolicyPageContainer from '../../pages/cookie/CookiePolicyPageContainer.js';
import PrivacyPolicyPageContainer from '../../pages/privacy/PrivacyPolicyPageContainer.js';
import TermsAndConditionsPageContainer from '../../pages/termsAndConditions/TermsAndConditionsPageContainer.js';
import DownloadPageContainer from '../../pages/download/DownloadPageContainer.js';
import LogoPageContainer from '../../pages/logo/LogoPageContainer.js';
import ProofPage from '../../pages/proof/ProofPage.js';
import { communityProjects } from '../../data/SiteData.js';

import '../../scss_styles/WickRouter.scss';

const home = () => (<HomePageContainer />)
const about = () => (<AboutPageContainer />)
const learn = () => (<LearnPageContainer />)
const community = () => (<CommunityPageContainer projects={communityProjects}/>)
const supporters = () => (<SupportersPageContainer />)
const cookie = () => (<CookiePolicyPageContainer />)
const privacy = () => (<PrivacyPolicyPageContainer />)
const terms = () => (<TermsAndConditionsPageContainer />)
const logo = () => (<LogoPageContainer />)
const download = () => (<DownloadPageContainer />)
const proof = () => (<ProofPage />)

const WickRouter = ({page, onClickCloseDropdown, onClickToggleDropdown, onClickLaunchEditor, backgroundAnimationClass, isDropdownOpen}) => (
    <Fragment>
        <div id="WickRouter-container">
            <Navbar light expand="md">
                <div className={backgroundAnimationClass} />
                <NavbarBrand
                    tag={Link}
                    to="/"
                    id={(page === "/" ? "WickRouter-activeItem--brand" : "")}
                    className="WickRouter-brand--narrow"
                    onClick={onClickCloseDropdown}
                >
                    wick editor
                </NavbarBrand>
                {(isDropdownOpen ? (
                    <NavbarToggler aria-label="toggel dropdown" onClick={onClickToggleDropdown} className="WickRouter-toggle ml-auto">X</NavbarToggler>
                ):(
                    <NavbarToggler aria-label="toggel dropdown" onClick={onClickToggleDropdown} className="ml-auto" />
                ))}
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
                            id={(page === "/" ? "WickRouter-activeItem--brand" : "")}
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
        <Route path="/" exact component={home} />
        <Route path="/updates/" component={home} />
        <Route path="/about/" component={about} />
        <Route path="/learn/" component={learn} />
        <Route path="/tutorials/" component={learn} />
        <Route path="/examples/" component={learn} />
        <Route path="/reference/" component={learn} />
        <Route path="/community/" component={community} />
        <Route path="/supporters/" component={supporters} />
        <Route path="/cookie-policy/" component={cookie} />
        <Route path="/privacy-policy/" component={privacy} />
        <Route path="/privacy/" component={privacy} />
        <Route path="/terms-and-conditions" component={terms} />
        <Route path="/logos" component={logo} />
        <Route path="/download" component={download} />
        <Route path="/proof" component={proof} />
    </Fragment>
);

export default WickRouter;