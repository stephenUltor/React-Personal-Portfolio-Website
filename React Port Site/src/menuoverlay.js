import React from "react"

export default function MenuOverlay(props) {

    return(
        <>
            <div className="menu-overlay" onClick={props.openNavbar}>

                <img className="home-icon" src="assets\home.png" onClick={() => window.scrollTo(0,0)}/>
                <hr className="nav-break-line-home"/>
                <br/>
                <a href="#about-me-container" className="about-icon-link"><img className="about-icon" src="assets\aboutme.png" /></a>
                <hr className="nav-break-line-about"/>
                <br/>
                <a href="#skills-container" className="projects-icon-link"><img className="projects-icon" src="assets\projects.png" /></a>
                <hr className="nav-break-line-projects"/>

                <img className="mode-button" src={props.darkMode ? "assets/pixel-sun.png" : "dark-assets/pixel-moon.png" } onClick={props.setMode}/>

            </div>
        </>
    )
}

