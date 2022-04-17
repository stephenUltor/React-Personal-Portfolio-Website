import React, {useEffect} from "react"

export default function AboutMe() {

    return (
        <>
            
            <div className="about-me-container" id="about-me-container">

                <img className="handsome-dude" src="assets\IMG_9882.jpg"/>

                <div className="about-me-contents" >
                    <h2 className="about-me-title">Nice to meet you! </h2>
                    <hr className="line2" />
                    <p className="about-me">The basic equations of the unified theory correctly
                    describe the electroweak force and its associated
                    force-carrying particles, namely the photon, and the W
                    and Z bosons, except for a major glitch. All of these
                    particles emerge without a mass. While this is true for
                    the photon, we know that the W and Z have mass, nearly
                    100 times that of a proton. Fortunately, theorists
                    Robert Brout, François Englert and Peter Higgs made a
                    proposal that was to solve this problem. What we now
                    call the Brout-Englert-Higgs mechanism gives a mass to
                    the W and Z when they interact with an invisible field,
                    now called the “Higgs field”, which pervades the
                    universe.</p>
                </div>
                
            </div>
        </>

    )
}