import React from "react";
import './Footer.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../logos/logo.png';
import {ReactComponent as FacebookIc} from '../assets/icons/facebook.svg';
import {ReactComponent as InstagramIc} from '../assets/icons/instagram.svg';
import {ReactComponent as LinkedIc} from '../assets/icons/linkedin.svg';

function Footer(){
    return(
        <footer>
            <div className="site-map flex-column">
                <AnchorLink href="#hero"><p>Home</p></AnchorLink>
                <AnchorLink href="#hero"><p>About</p></AnchorLink>
                <AnchorLink href="#hero"><p>Timeline</p></AnchorLink>
                <p>FAQ</p>
            </div>
            <div>
                <img src={logo} alt="MadHack logo" />
            </div>
            <div>
                <FacebookIc height={24} width={24} />
                <InstagramIc />
                <LinkedIc />
            </div>
        </footer>
    );
}

export default Footer;