import React, {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


export default function Skills() {

    useEffect(()=> {
        Aos.init({})
    },[])

    return(
        <>
            <div className="skills-contianer" id="skills-container">

                <h2 className="skills-title">Things I do well...</h2>

                <div className="skill-icon-container" data-aos="fade-up" data-aos-duration="1000" >

                    <FontAwesomeIcon icon={faHtml5} className="icons" />
                    <FontAwesomeIcon icon={faCss3} className="icons" />
                    <FontAwesomeIcon icon={faJsSquare} className="icons" />
                    <FontAwesomeIcon icon={faReact} className="icons" />
                    <FontAwesomeIcon icon={faGithub} className="icons" />


                </div>

            </div>
        </>
    )
}