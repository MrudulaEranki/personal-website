import { useState } from 'react'
import './App.css'

import NavBar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import ExperienceEducation from './components/expedu.jsx'
import Contact from './components/contact.jsx'
import Dinos from './components/dinos.jsx';


function App() {

  return (
    <>
    {/* <Dinos/> */}
      <NavBar/>
      <Hero/>
      
      <About/>
      <ExperienceEducation/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
