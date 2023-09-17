import React from "react";
import './Footer.css';
import logo from '../logos/logo.png';
import {ReactComponent as FacebookIc} from '../assets/icons/facebook.svg';
import {ReactComponent as InstagramIc} from '../assets/icons/instagram.svg';
import {ReactComponent as LinkedIc} from '../assets/icons/linkedin.svg';

function Footer(){
    return(
        <footer>
            <div className="site-map flex-column">
                <p>Home</p>
                <p>About</p>
                <p>Timelint</p>
                <p>Prizes</p>
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