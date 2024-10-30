import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';
//import background from './assets/background.jpg';

function App() {
  
  return (
    <div className="App">

      <Header />
      <main>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="certificates"><Certificates /></section>  {/* New Certificates Section */}
        <section id="contact"><Contact /></section>
      </main>
    </div>
  
  );
}

export default App;
