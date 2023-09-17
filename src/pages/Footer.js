import React from "react";
import './Footer.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../logos/logo.png';
import {ReactComponent as FacebookIc} from '../assets/icons/facebook.svg';
import {ReactComponent as InstagramIc} from '../assets/icons/instagram.svg';
import {ReactComponent as LinkedIc} from '../assets/icons/linkedin.svg';
import {ReactComponent as GithubIc} from '../assets/icons/github.svg';

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
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/IEEE.UCSC">
                    <FacebookIc height={24} width={24} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ucsc.ieee/">
                    <InstagramIc />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ieee-student-branch-ucsc/">
                    <LinkedIc />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/AshJayy/ucsc-ieee-web-task">
                    <GithubIc />
                </a>
            </div>
        </footer>
    );
}

export default Footer;