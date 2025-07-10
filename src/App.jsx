import React from 'react'
import Lenis from '@studio-freight/lenis';
import Navbar from './components/navbar/navbar';
import Home from './components/Homepage/Home';
import About from './components/AboutPage/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <>
    <Navbar />
    {/* <Home />
    <About /> */}
    {/* <Skills /> */}
    <Projects />
    </>
  )
}

export default App