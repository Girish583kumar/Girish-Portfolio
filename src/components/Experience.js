import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'AI Variant',
      role: 'Data Analyst',
      duration: 'September 2023 – June 2024',
      responsibilities: [
        'Developed slicers, KPIs, and visualizations for data insights.',
        'Created dashboards to track performance metrics and support decision-making.',
        'Utilized ETL processes to manage data loading and transformation for analysis.',
        'Collaborated with stakeholders to define requirements and deliver data solutions.',
      ],
    },
  ];

  return (
    <div className="experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <h3>{experience.company}</h3>
            <p className="role">{experience.role}</p>
            <p className="duration">{experience.duration}</p>
            <ul className="responsibilities">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
