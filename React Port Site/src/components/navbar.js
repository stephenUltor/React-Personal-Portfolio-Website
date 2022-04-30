import React from "react" 
import AboutMe from "./Aboutme"

export default function Navbar(props) {


    return(
        

        <>

            <img className="snail-menu-icon" alt="snail-menu-access-icon-button" src="assets\pixel-snail.webp" onClick={props.openNavbar}/>

            <nav>

                

                
                
                <img className="home-icon" alt="home-icon-button" src="assets\home.webp" onClick={() => window.scrollTo(0,0)}/>
                <hr className="nav-break-line-home"/>
                <br/>
                <a href="#about-me-container" title="link to about-me section" className="about-icon-link"><img className="about-icon" alt="about-me-icon-button" src="assets\aboutme.webp" /></a>
                <hr className="nav-break-line-about"/>
                <br/>
                <a href="#skills-container" title="link to projects section" className="projects-icon-link"><img className="projects-icon" alt="projects-icon-button" src="assets\projects.webp" /></a>
                <hr className="nav-break-line-projects"/>

                <img className="mode-button" alt="dark-mode-button" src={props.darkMode ? "assets/pixel-sun.webp" : "dark-assets/pixel-moon.webp" } onClick={props.setMode}/>
                
            </nav>
        </>
    )
}

