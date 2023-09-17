import React from "react";
import './Header.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../logos/logo.png';

function Header(){
    return(
        <header className="black-transparent">
            <nav class="nav">
            <img src={logo} alt="logo" id="logo" />
                <ul className="nav-list">
                    <AnchorLink href="#hero"><li className="nav-item">Home</li></AnchorLink>
                    <AnchorLink href="#intro"><li className="nav-item">About</li></AnchorLink>
                    <AnchorLink href="#timeline"><li className="nav-item">Timeline</li></AnchorLink>
                    <li className="nav-item">FAQ</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;