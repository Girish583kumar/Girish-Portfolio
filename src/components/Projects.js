import React from 'react';
import './Projects.css';

const Projects = () => {
  const professionalProjects = [
    {
      title: 'Zomato Data Analysis',
      description: ' It is an Online Food Delievery Website which we can order a food. In this dashboard we have seen Total No. Of Restaurants, Cusines, Countries, Cities and Average Ratings of a food items. By this dashboard we can able to see the year and countries data. This Dashboard helps to a client to understand the Year by Year Data analysis along with Country with respective of Average ratings and Top 5 cities in a Country.  ',
      skills: ['Power BI', 'Tableau', 'SQL']
    },
    {
      title: 'Olist Data Analysis',
      description: 'It is an American E Commerce Website which helps to buy the products. In this dashboard we have seen Total No. Of Restaurants, Cusines, Countries, Cities and Average Ratings of a food items. By this dashboard we can able to see the year and countries data. This Dashboard helps to a client to understand the Year by Year Data analysis along with Country with respective of Average ratings and Top 5 cities in a Country.  ',
      skills: ['Power BI', 'Tableau', 'SQL']
    },
    {
      title: 'Dialysis Patient Analysis',
      description: 'we focus on enhancing dialysis treatment. As chronic kidney disease (CKD) becomes more prevalent, the demand for effective dialysis is increasing. This project aims to analyze dialysis data, establish clear timelines, and track key performance indicators (KPIs) to improve patient outcomes and healthcare efficiency. By leveraging data-driven insights, we strive to elevate the quality of dialysis care and positively impact patient lives',
      skills: ['Power BI', 'Tableau', 'SQL']
    },
  ];

  const personalProjects = [
    {
      title: 'IPL Data Analysis Dashboard',
      description: 'This Dashboard Helps to Find out the Stats of IPL year by Year. Developed a KPI’S to visulaize the Number of 6’S, 4’S, runs Scored by Batsman, Orange Cap of the Season, Purple cap of the Season, With respective of the Slicer Year by Year.  Developed A slicer to know the respective batsman and Bowler details of the Season. ',
      skills: ['Power BI', 'SQL', 'Data Modeling', 'KPI\'s']
    },
    {
      title: 'IPL Auction Data Analysis (Python)',
      description: 'In this project we have analysed the data of players in IPL. we have analysed the squad of 2022 to 2023 transferred Players in Auction of every team. In this project we have figured out how many types of players have participated in the auction',
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
