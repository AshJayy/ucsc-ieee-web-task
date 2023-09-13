import React from "react";
import "./Hero.css";
import Header from './Header';
import logo from '../logos/logo.png';


function Hero(){
    return(
        <section className="full-page">
            <Header />
            <section id="hero" className="black-transparent">
                <div className="flex-column">
                    <img src={logo} alt="logo" className="logo" />
                    <button>Register Now</button>
                </div>
                <div>
                    <p className="hero-text sub-title right-align">
                    Sri Lanka’s first ever
                    <br />
                    Mobile Application Development
                    <br/>
                    Hackathon
                    </p>
                    <p className="right-align">
                        A project by the IEEE Student branch of UCSC
                    </p>
                </div>
            </section>
        </section>

    );
}

export default Hero;