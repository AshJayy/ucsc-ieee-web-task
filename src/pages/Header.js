import React from "react";
import { useEffect, useState } from "react";
import './Header.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../logos/logo.png';

function Header(){

    const [isSmall, setSmall] = useState(false);

    useEffect(() => {
        const handler = () => {
            setSmall((isSmall) => {
                if(!isSmall && 
                    (document.body.scrollTop > 100 ||
                        document.documentElement.scrollTop > 20)){
                    return true;
                }

                if(isSmall && 
                    document.body.scrollTop < 300 &&
                    document.documentElement.scrollTop < 300){
                    return false;
                }

                return isSmall;
            });
        };

        

        window.addEventListener("scroll", handler);
    }, []);

    return(
        <header className="black-transparent">
            <nav class={isSmall ? "nav nav-small" : "nav nav-large"}>
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