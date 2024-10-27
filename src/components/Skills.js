import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { category: "Domain Knowledge", items: ["Python", "SQL"] },
        { category: "Languages", items: ["Python"] },
        { category: "Reporting Tools", items: ["Tableau", "Power BI", "Advanced Excel", "Oracle 11g", "R"] },
        { category: "Concepts", items: ["Dashboard", "KPI's", "Slicers", "Filters", "Conditional Formatting", "DAX Queries", "Data Cleaning", "Data Preprocessing", "Data Manipulating"] }
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skills.map((skillSet, index) => (
                    <div key={index} className="skill-card">
                        <h3 className="skill-category-title">{skillSet.category}</h3>
                        <ul className="skill-items">
                            {skillSet.items.map((item, i) => (
                                <li key={i} className="skill-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
