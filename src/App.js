import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certficates';
import Languages from './components/Languages';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education></Education>
      <Projects />
      <Certificates></Certificates>
      <Languages></Languages>
      <Contact />
    </div>
  );
}

export default App;
