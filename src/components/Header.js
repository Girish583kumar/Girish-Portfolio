import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, } from '@fortawesome/free-brands-svg-icons';
import './Header.css'; // Make sure this path is correct

const Header = () => {
    return (
        <header className="header">
            <div className="profile">
                <img
                    src='C:/Users/Meda Sesha priyanka/Downloads/data-analyst-portfolio/public/assets/Girish-Profile-pic.jpg' // Replace this with your actual profile image path
                    alt="Profile"
                    className="profile-pic"
                />
                <h1 className="profile-name">Meda Girish Kumar</h1>
                <h1 className="profile-name">girish573kumar@gmail.com</h1>
                <h1 className="profile-name">6302737269</h1>
                
            </div>
            <div className="social-media">
            <a href="https://github.com/Girish583kumar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
            </div>
            
            <nav className="nav">
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#education" className="nav-link">Education</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
