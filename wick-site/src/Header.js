/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Header.js

    Navigation Bar for website
*/

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import './Header.scss';

const Header = ({page, onClickChangePage, onClickToggleDropdown, onClickLaunchEditor, isBackgroundHidden, isDropdownOpen}) => (
    <div id="Header-container">
        <Navbar color={(isBackgroundHidden ? "" : "light")} light expand="sm">
            <NavbarBrand
                href="#"
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
                        href="#"
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
                            href="#"
                            id={(page === "learn" ? "Header-activeItem" : "")}
                            className="Header-navItem"
                            onClick={() => onClickChangePage("learn")}
                        >
                            learn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            id={(page === "about" ? "Header-activeItem" : "")}
                            className="Header-navItem"
                            onClick={() => onClickChangePage("about")}
                        >
                            about
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
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
);

export default Header;