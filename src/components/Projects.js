import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>

      {/* Professional Projects */}
      <div className="project-card">
        <h4>Zomato Data Analysis(Power BI,Tableau Dashboard)</h4>
        <p><b>Description :</b>  It is an Online Food Delievery Website which we can order a food. In this dashboard we have seen Total No. Of Restaurants, Cusines, Countries, Cities and Average Ratings of a food items. By this dashboard we can able to see the year and countries data. This Dashboard helps to a client to understand the Year by Year Data analysis along with Country with respective of Average ratings and Top 5 cities in a Country.  </p>
        <p><b>Technologies:</b> Power BI, Tableau, SQL</p>
        
      </div>

      <div className="project-card">
        <h4>Olist Data Analysis(Power BI, Tableau Dashboard)</h4>
        <p><b>Description:</b>It is an American E Commerce Website which helps to buy the products. In this dashboard we have seen Total No. Of Restaurants, Cusines, Countries, Cities and Average Ratings of a food items. By this dashboard we can able to see the year and countries data. This Dashboard helps to a client to understand the Year by Year Data analysis along with Country with respective of Average ratings and Top 5 cities in a Country.  </p>
        <p><b>Technologies:</b> Power BI, SQL</p>
      </div>

      <div className="project-card">
        <h4>Dialysis of Patients Data Analysis(Power BI, Tableau Dashboard)</h4>
        <p><b>Description:</b> we focus on enhancing dialysis treatment. As chronic kidney disease (CKD) becomes more prevalent, the demand for effective dialysis is increasing. This project aims to analyze dialysis data, establish clear timelines, and track key performance indicators (KPIs) to improve patient outcomes and healthcare efficiency. By leveraging data-driven insights, we strive to elevate the quality of dialysis care and positively impact patient lives..  </p>
        <p><b>Technologies:</b> Power BI, SQL</p>
      </div>


      {/* Personal Projects */}
      <div className="project-card">
        <h4>IPL Data Analysis (Power BI Dashboard)</h4>
        <p><b>Description:</b> This dashboard visualizes IPL stats year by year, showing sixes, fours, runs scored by batsmen, and award winners per season.</p>
        <p><b>Skills:</b> Dashboard, Data Cleaning, Data Modeling, PostgreSQL, Slicers, KPIs</p>
      </div>

      <div className="project-card">
        <h4>IPL Data Analysis (Python Project)</h4>
        <p><b>Description:</b> Analyzed IPL player data from 2022-2023, focusing on auctioned player transfers and player types.</p>
        <p><b>Skills:</b> Data Analytics, Python, Google Colab</p>
      </div>

      <div className="project-card">
        <h4>Global Superstore Analysis Dashboard (Tableau)</h4>
        <p><strong>Description:</strong> Sales analysis, category-wise sales, top products, and monthly trends for a global superstore.</p>
        <p><b>Skills:</b> Filters, Navigation, Pie Chart, Bar Charts</p>
      </div>
    </section>
  );
}

export default Projects;
