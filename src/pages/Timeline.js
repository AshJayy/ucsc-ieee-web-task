import React from "react";
import './Timeline.css';
import ScrollAnimation from "react-animate-on-scroll";

function Timeline(){
    const timeLineData = [
        {
            date: "28 Jan",
            title: "Launch Event",
            desc: "Official kickoff and registrattions"
        },
        {
            date: "11 Feb",
            title: "Workshop I",
            desc: "Held online, covering the topic Android Native"
        },
        {
            date: "18 Feb",
            title: "Workshop II",
            desc: "Held physically @ UCSC, covering topics React Native, Low Code & Deployment"
        },
        {
            date: "11 Feb",
            title: "Hackathon",
            desc: "A 24 hour hackathon to show your skills"
        },
        {
            date: "26 Feb",
            title: "Final Event",
            desc: "Final project presentation & award ceramony"
        }
    ];

    const Item = (p) => (
            <ScrollAnimation 
                animateIn={p.animateIn} 
                animateOut="animate__fadeOut"
                animateOnce={true}
                className="timeline-item"
            >
                <div className="timeline-item-content">
                    <time>{p.data.date}</time>
                    <h3>{p.data.title}</h3>
                    <p>{p.data.desc}</p>
                    <span className="circle" />
                </div>
            </ScrollAnimation>
        );

    const Container = () => 
        timeLineData.length > 0 && (
            <div className="timeline-container">
                {timeLineData.map((data, i) => (
                    <Item 
                        data={data} 
                        key={i} 
                        animateIn={( i % 2 === 1) ? "animate__fadeInBottomRight" : "animate__fadeInBottomLeft"}
                    />
                    )
                )}
            </div>
        )

    

    return(
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <section id="timeline" className="flex-column">
                <h1 className="title">Timeline</h1>
                <Container />
            </section>
        </ScrollAnimation>
    );
}

export default Timeline;