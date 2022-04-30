import React, {useEffect} from "react" 
import Aos from "aos"
import "aos/dist/aos.css"


export default function Projects(props) {

    useEffect(()=> {
        Aos.init({ })
    },[])

    return (
        <>
            <div className="projects-container">

                <h2 className="projects-title">What have I done?</h2>

                <img className="clouds" alt="clouds" src={props.darkMode ? "dark-assets/pix-cloud.webp" : "assets/pix-cloud.webp"} data-aos="fade-left" data-aos-duration="3000"></img>

                <img className="tree" alt="tree" src={props.darkMode? "dark-assets/tree.webp" : "assets/tree.webp"} ></img>

                <div className="project-tile-container">

                    <div className="project-tile-frame-gold" onClick={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}>
                        <img className="frame" alt="gold frame" src={props.darkMode? "dark-assets/pixel-frame-gold.webp" : "assets/pixel-frame-gold.webp"} />

                        <button className="frame-button" onClick={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}>· Quiz App Clone ·</button>
                    </div>

                    

                    <div className="project-tile-frame-red" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/QWaxKqY?editors=0010", "_blank")}>
                        <img className="frame" alt="red frame" src={props.darkMode? "dark-assets/pixel-frame-red.webp" : "assets/pixel-frame-red.webp"} />

                        <button className="frame-button" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/QWaxKqY?editors=0010", "_blank")}>· Boids Window ·</button>
                    </div>

                    

                    <div className="project-tile-frame-wood" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/bGYWxRB?editors=0010", "_blank")}>
                        <img className="frame" alt="wood frame" src={props.darkMode? "dark-assets/pixel-frame-wood.webp" : "assets/pixel-frame-wood.webp"} /> 

                        <button className="frame-button" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/bGYWxRB?editors=0010", "_blank")}>· War Game ·</button>
                    </div>

                    

                    <div className="project-tile-frame-thin" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/GRMXwyq", "_blank")}>
                        <img className="frame" alt="thin frame" src={props.darkMode? "dark-assets/pixil-frame-thin.webp" : "assets/pixil-frame-thin.webp"} />

                        <button className="frame-button" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/GRMXwyq", "_blank")}>· Book Demo ·</button>
                    </div>

                    

                </div>

            </div>
        </>
    )
}