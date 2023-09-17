import React from "react";
import './Header.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../logos/logo.png';

function Header(){
    return(
        <header className="black-transparent">
            <nav class="nav">
            <img src={logo} alt="logo" id="logo" />
                <ul>
                    <AnchorLink href="#hero"><li>Home</li></AnchorLink>
                    <AnchorLink href="#intro"><li>About</li></AnchorLink>
                    <AnchorLink href="#timeline"><li>Timeline</li></AnchorLink>
                    <li>FAQ</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;