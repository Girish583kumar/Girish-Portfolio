import React from 'react';
import profilePic from './Girish Profile pic.jpg' // Update with the correct path

function Header() {
  return (
    <header>
      <img src={profilePic} alt="Meda Girish Kumar" className="profile-pic" />
      <h1>Meda Girish Kumar</h1>
      <p>Data Analyst and Power BI Developer</p>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#Languages">Languages</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
