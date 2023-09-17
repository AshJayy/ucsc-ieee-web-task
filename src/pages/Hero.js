import React from "react";
import { useEffect, useState } from "react";
import "./Hero.css";
import logo from '../logos/logo.png';
import ScrollAnimation from "react-animate-on-scroll";


function Hero(){

    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setFirstLoad(false);
    }, []);

    return(
        <ScrollAnimation  animateIn="animate__fadeIn" animateOut="animate__fadeOut" initiallyVisible={firstLoad}>
            <section id="hero">
                <div className="hero-content black-gradient">
                    <div className="flex-column">
                        <img src={logo} alt="MadHack logo" id="logo" />
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
                </div>
            </section>
        </ScrollAnimation>

    );
}

export default Hero;