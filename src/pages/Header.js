import React from "react";
import './Header.css';
import logo from '../logos/logo.png';

function Header(){
    return(
        <header className="black-transparent">
            <nav>
            <img src={logo} alt="logo" id="logo" />
                <ul>
                    <li>About</li>
                    <li>Timeline</li>
                    <li>Prizes</li>
                    <li>FAQ</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;