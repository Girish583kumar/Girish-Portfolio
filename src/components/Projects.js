import React from 'react';
import './Projects.css';

const Projects = () => {
  const professionalProjects = [
    {
      title: 'Zomato Data Analysis',
      description: 'An online food delivery website dashboard showcasing restaurant counts, cuisines, average ratings, and country-specific insights.',
      skills: ['Power BI', 'Tableau', 'SQL']
    },
    {
      title: 'Olist Data Analysis',
      description: 'Analyzed sales data from an American E-commerce website, including customer orders, shipping data, and year-by-year insights.',
      skills: ['Power BI', 'Tableau', 'SQL']
    },
    {
      title: 'Dialysis Patient Analysis',
      description: 'A dashboard tracking patient dialysis data, treatment timelines, and KPI analysis to enhance healthcare outcomes.',
      skills: ['Power BI', 'Tableau', 'SQL']
    },
  ];

  const personalProjects = [
    {
      title: 'IPL Data Analysis Dashboard',
      description: 'Power BI dashboard visualizing IPL statistics year by year, covering runs, boundaries, Orange/Purple Cap winners, etc.',
      skills: ['Power BI', 'SQL', 'Data Modeling', 'KPI\'s']
    },
    {
      title: 'IPL Data Analysis (Python)',
      description: 'Analyzed IPL auction data, player transfers, and team rosters using Python libraries for data analysis.',
      skills: ['Python', 'Data Analytics', 'Colab']
    },
    {
      title: 'Global Superstore Analysis Dashboard',
      description: 'Tableau dashboard analyzing sales performance, category-wise sales, and monthly trends for a global superstore.',
      skills: ['Tableau', 'Data Visualization', 'Filters', 'Charts']
    }
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>

      <div className="project-category">
        <h3>Professional Projects</h3>
        <div className="projects-grid">
          {professionalProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, idx) => (
                  <span className="skill" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>Personal Projects</h3>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, idx) => (
                  <span className="skill" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
