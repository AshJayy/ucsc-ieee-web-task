import React from "react";
import './Intro.css';
import mad from '../assets/img/intro.png';

function Intro(){
    return(
        <section id="intro" className="full-page">
            <div>
                <article className="black-transparent flex-column">
                    <div className="padding-zero" ><h2 className="title">What is</h2></div>
                    <p>
                    Introducing Sri Lanka’s first Mobile Application Development Hackathon, 
                    the IEEE Student Branch of UCSC proudly presents 'MadHack', an inter-university 
                    hackathon followed by a series of workshops. MadHack aims to let the participants 
                    put their creativity and innovation to the test by giving them the opportunity 
                    to develop in any platform of choice.
                    </p>
                    <div className="padding-zero"><h2 className="title right-align">MadHack?</h2></div>
                </article>
                <article>
                    <img src={mad} alt="Elevate mobile app development" />
                    <div className="absolute-center" id="elevate">
                        <p className="center-align">elevate mobile app development</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Intro;