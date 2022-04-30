import React from "react"

export default function MenuOverlay(props) {

    return(
        <>
            <div className="menu-overlay" onClick={props.openNavbar}>

                <img className="home-icon" alt="home-icon-button" src="assets\home.webp" onClick={() => window.scrollTo(0,0)}/>
                <hr className="nav-break-line-home"/>
                <br/>
                <a href="#about-me-container" title="link to about-me section" className="about-icon-link"><img className="about-icon" alt="about-me-icon-button" src="assets\aboutme.webp" /></a>
                <hr className="nav-break-line-about"/>
                <br/>
                <a href="#skills-container" title="link to projects section" className="projects-icon-link"><img className="projects-icon" alt="projects-icon-button" src="assets\projects.webp" /></a>
                <hr className="nav-break-line-projects"/>

                <img className="mode-button" alt="dark-mode-icon-button" src={props.darkMode ? "assets/pixel-sun.webp" : "dark-assets/pixel-moon.webp" } onClick={props.setMode}/>

            </div>
        </>
    )
}

