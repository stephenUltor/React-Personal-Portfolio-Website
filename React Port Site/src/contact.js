import React, { useRef, useEffect } from "react"
import emailjs from '@emailjs/browser'
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faCodepen } from "@fortawesome/free-brands-svg-icons"


export default function Contact() {

    useEffect(()=> {
        Aos.init({})
    },[])


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gtlft5p', 'template_s3a5944', form.current, 'RgIrP9T0SYKfoJFp1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

    return (
        <>
            <div className="contact-container">

                <h2 className="contact-title"><u>Say Hello!</u></h2>

                <div className="contact-info-container">

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Email</label>
                        <input type="email" name="email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" className="contact-send-button" />
                    </form>

                    <div className="social-media">

                        <h2 className="social-media-title">Check Me Out</h2>

                        <div className="social-media-icon-container" data-aos="fade-right" >

                            <a href="https://twitter.com/stephenUltor" target="_blank" className="twitter-icon-link"><FontAwesomeIcon icon={faKiwiBird} className="icons twitter" /></a>
                            <a href="https://www.linkedin.com/in/stephen-morrow-73b6b7169/" target="_blank" className="linkedin-icon-link"><FontAwesomeIcon icon={faLinkedin} className="icons linkedin" /></a>
                            <a href="https://www.facebook.com/stephen.morrow.12382" target="_blank" className="facebook-icon-link"><FontAwesomeIcon icon={faFacebook} className="icons facebook" /></a>
                            <a href="https://codepen.io/stephenleemorrow" target="_blank" className="codepen-icon-link"><FontAwesomeIcon icon={faCodepen} className="icons codepen" /></a>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

