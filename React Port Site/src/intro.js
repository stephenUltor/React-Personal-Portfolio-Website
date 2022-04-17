import React from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"
import sketch from "./sketch"



export default function Intro(props) {

    return (

        <div className="intro-container" id="intro-container">

            <div className="boids-window-buffer"></div>

            <ReactP5Wrapper  sketch={sketch} darkMode={props.darkMode} />
            <div className="intro-title-container">
                <h1 className="intro-title-top">Hello,&nbsp;</h1><h1 className="intro-title-bottom">I'm Stephen.</h1>
            </div>
            
            <hr className="line1" />
            <p className="intro-description">Software Developer and Technical Writer</p>
            <img className="flower-pots" src={props.darkMode ? "dark-assets/flowers-dark.png" : "assets/pngegg.png" } />

        </div>
    )
}