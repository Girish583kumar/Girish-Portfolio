// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
            year: "2022",
            cgpa: "8.16 CGPA"
        },
        {
            degree: "Intermediate",
            institution: "Sri Chaitanya Jr College, Kurnool",
            year: "2018",
            percentage: "80.6%"
        },
        {
            degree: "SSC",
            institution: "Sri Sudha Residential High School, Dhone",
            year: "2016",
            percentage: "83%"
        },
    ];

    return (
        <div className="education">
            <h2 className="education-title">Education</h2>
            <div className="education-container">
                {educationData.map((edu, index) => (
                    <div className="education-card" key={index}>
                         <h3 className="education-degree">{edu.degree}</h3>
                        <p className="education-institution">{edu.institution}</p>
                        <p className="education-year">{edu.year}</p>
                        {edu.cgpa ? (
                            <p className="education-cgpa">CGPA: {edu.cgpa}</p>
                        ) : (
                            <p className="education-percentage">Percentage: {edu.percentage}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
