import React, { useState, useEffect } from "react"
import Navbar from "./navbar"
import Intro from "./intro"
import AboutMe from "./Aboutme"
import Projects from "./projects"
import Skills from "./skills"
import MenuOverlay from "./menuoverlay"
import Contact from "./contact"
import Footer from "./footer"




function App() {

  const [navbar, setNavbar] = useState(false)

  const [darkMode, setDarkMode] = useState(false)

  function openNavbar() {
    setNavbar(!navbar)
  }

  useEffect(() => {
    if (darkMode){
      localStorage.setItem("theme", "dark")
      document.documentElement.setAttribute("data-theme", "dark")
    }else{
      localStorage.setItem("theme", "light")
      document.documentElement.setAttribute("data-theme", "light")
    }
  },[darkMode])

  function setMode() {
    setDarkMode(!darkMode)
  }


  return(

    <>


      {navbar && <MenuOverlay openNavbar={openNavbar} setMode={setMode} darkMode={darkMode}/>}

      <Navbar 
        navbar={navbar}
        openNavbar={openNavbar}
        setMode={setMode}
        darkMode={darkMode}
      />
      <Intro darkMode={darkMode} />
      <AboutMe />
      <Projects darkMode={darkMode} />
      <Skills />
      <Contact />
      <Footer />

    </>
    
    

  )
  
}

export default App;

