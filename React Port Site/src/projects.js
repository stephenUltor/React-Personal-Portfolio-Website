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

                <img className="clouds" src={props.darkMode ? "dark-assets/pix-cloud.png" : "assets/pix-cloud.png"} data-aos="fade-left" data-aos-duration="3000"></img>

                <img className="tree" src={props.darkMode? "dark-assets/tree.png" : "assets/tree.png"} ></img>

                <div className="project-tile-container">

                    <div className="project-tile-frame-gold" onClick={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}>
                        <img className="frame" src={props.darkMode? "dark-assets/pixel-frame-gold.png" : "assets/pixel-frame-gold.png"} />

                        <button className="frame-button" onClick={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}>· Quiz App Clone ·</button>
                    </div>

                    

                    <div className="project-tile-frame-red" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/QWaxKqY?editors=0010", "_blank")}>
                        <img className="frame" src={props.darkMode? "dark-assets/pixel-frame-red.png" : "assets/pixel-frame-red.png"} />

                        <button className="frame-button" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/QWaxKqY?editors=0010", "_blank")}>· Boids Window ·</button>
                    </div>

                    

                    <div className="project-tile-frame-wood" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/bGYWxRB?editors=0010", "_blank")}>
                        <img className="frame" src={props.darkMode? "dark-assets/pixel-frame-wood.png" : "assets/pixel-frame-wood.png"} /> 

                        <button className="frame-button" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/bGYWxRB?editors=0010", "_blank")}>· War Game ·</button>
                    </div>

                    

                    <div className="project-tile-frame-thin" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/GRMXwyq", "_blank")}>
                        <img className="frame" src={props.darkMode? "dark-assets/pixil-frame-0 (3).png" : "assets/pixil-frame-0 (3).png"} />

                        <button className="frame-button" onClick={() => window.open("https://codepen.io/stephenleemorrow/pen/GRMXwyq", "_blank")}>· Book Demo ·</button>
                    </div>

                    

                </div>

            </div>
        </>
    )
}