import React from "react" 
import AboutMe from "./Aboutme"

export default function Navbar(props) {


    return(
        

        <>

            <img className="snail-menu-icon" src="assets\pixel-snail.png" onClick={props.openNavbar}/>

            <nav>

                

                
                
                <img className="home-icon" src="assets\home.png" onClick={() => window.scrollTo(0,0)}/>
                <hr className="nav-break-line-home"/>
                <br/>
                <a href="#about-me-container" className="about-icon-link"><img className="about-icon" src="assets\aboutme.png" /></a>
                <hr className="nav-break-line-about"/>
                <br/>
                <a href="#skills-container" className="projects-icon-link"><img className="projects-icon" src="assets\projects.png" /></a>
                <hr className="nav-break-line-projects"/>

                <img className="mode-button" src={props.darkMode ? "assets/pixel-sun.png" : "dark-assets/pixel-moon.png" } onClick={props.setMode}/>
                
            </nav>
        </>
    )
}

