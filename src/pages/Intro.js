import React from "react";
import './Intro.css';
import 'animate.css';
import mad from '../assets/img/intro.png';
import ScrollAnimation from "react-animate-on-scroll";

function Intro(){
    return(
        <section id="intro" className="full-page">
            <div className="intro-container">
                <article >
                    <ScrollAnimation animateIn="animate__fadeInRight" >
                        <div className="intro-desc black-transparent flex-column">
                            <span className="padding-zero" ><h2 className="title">What is</h2></span>
                            <p>
                            Introducing Sri Lanka’s first Mobile Application Development Hackathon, 
                            the IEEE Student Branch of UCSC proudly presents 'MadHack', an inter-university 
                            hackathon followed by a series of workshops. MadHack aims to let the participants 
                            put their creativity and innovation to the test by giving them the opportunity 
                            to develop in any platform of choice.
                            </p>
                            <span className="padding-zero"><h2 className="title right-align">MadHack?</h2></span>
                        </div>
                    </ScrollAnimation>
                </article>
                

                <article>
                    <ScrollAnimation animateIn="animate__fadeInRight" delay={500}>
                        <img src={mad} alt="Elevate mobile app development" />
                        <div className="absolute-center elevate">
                            <ScrollAnimation animateIn="animate__zoomIn">
                                <p className="center-align">elevate mobile app development</p>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>
                </article>
            </div>
        </section>
    );
}

export default Intro;