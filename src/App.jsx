import { useEffect, useState } from 'react'
import './App.css'
import { Analytics } from '@vercel/analytics/react'

import NavBar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import ExperienceEducation from './components/expedu.jsx'
import Contact from './components/contact.jsx'
import Loader from './components/loader.jsx';


function App() {

  const [loading, setLoading] = useState(true);
  useEffect(
    ()=>{
      const timer = setTimeout(
        ()=>{
          setLoading(false);
        },2000
      );
      return ()=>clearTimeout(timer);
    },[]
  );

  if(loading){
    return<Loader/>
  }

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
      <Analytics />
    </>
  )
}

export default App
