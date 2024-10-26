// src/components/Education.js
import React from 'react';
//import './Education.css';

const Education = () => {
    const educationData = [
        {
            title: "B.Tech in Computer Science and Engineering",
            institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
            cgpa: "8.16",
            year: "2022"
        },
        {
            title: "Intermediate",
            institution: "Sri Chaitanya Junior College, Kurnool",
            percentage: "80.6%",
            year: "2018"
        },
        {
            title: "SSC",
            institution: "Sri Sudha Residential High School, Dhone",
            percentage: "83%",
            year: "2016"
        }
    ];

    return (
        <div id="education" className="education">
            <h2>Education</h2>
            <div className="education-cards">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3>{edu.title}</h3>
                        <p>{edu.institution}</p>
                        {edu.cgpa && <p><strong>CGPA:</strong> {edu.cgpa}</p>}
                        {edu.percentage && <p><strong>Percentage:</strong> {edu.percentage}</p>}
                        <p><strong>Year of Completion:</strong> {edu.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
