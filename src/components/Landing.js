import React, { Component } from 'react'
import { TimelineMax, Power2 } from "gsap/TweenMax";

export default class Landing extends Component {

    componentDidMount(){
        var timeline = new TimelineMax();
        timeline.staggerFrom('section', 2, {
            opacity: 0,
            scale: .5,
            ease: Power2.easeOut
        }, 0.2)
        timeline.staggerFrom('h1, h2',0.5, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.2, "-=2")
        timeline.staggerFrom('.anim-panel', 1, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.2, "-=1.5")
    }

    render(){
        return (
            <div className="wrapper">
            <section className="hero">
                <div className ="inner">
                    <div className = "clipper">
                        <h1>Software developer</h1>
                    </div>
                    <div className="anim-panel">
                        <p>MARY APONDI, with well documented History</p>
                        <a href="/about" className="read-btn primary">Explore portfolio</a>
                    </div>
                </div>
            </section>
            <section className= "featured">
                <div className = "inner">
                    <div className = "clipper">
                        <h2>Featured</h2>
                    </div>
                    <div className="anim-panel">
                        <p>
                            A versatile, adaptable, creative and technically adept software developer with good organizational skills, coupled with excellent interpersonal and communication skills. I  also have good presentation skills. I am diligent, keen, thorough and effective in every given task. Also a persistent learner and highly motivated to reach heights previously un-met.
                        </p>
                        <a href="/about" className="read-btn">Read more</a>
                    </div>
                </div>
            </section>
            <section className = "explore">
                <div className="inner">
                    <div className="clipper">
                        <h2>Get started</h2>
                    </div>
                    <div className="anim-panel">
                        <p>Review my portfolio, and some of the projects i have done</p>
                        <form action="/about">
                            <button className = "cta" type="submit">Get started</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}