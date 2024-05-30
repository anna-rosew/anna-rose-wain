import React from "react";
import "./App.css";
import ProjectCard from "./ProjectCard";
import "./Work.css";

const WorkSection = () => {
  const projects = [
    {
      title: "Weather App",
      className: "project-1",
      altText: "React Weather App",
      tags: ["App", "React.js", "API Integration"],
      repoLink: "https://github.com/anna-rosew/weather-app-final",
      liveLink: "https://what-should-i-wear-outside.netlify.app/",
      date: "Jan 2024",
      image: require("./imgs/react-weather-app.png"),
    },

    {
      title: "Dictionary App",
      className: "project-2",
      altText: "Dictionary App",
      tags: ["App", "React.js", "Bootstrap"],
      repoLink: "https://github.com/anna-rosew/react-dictionary-app",
      liveLink: "https://lexilore-react.netlify.app/",
      date: "Feb 2024",
      image: require("./imgs/react-dictionary.png"),
    },

    {
      title: "3D Design Site",
      className: "project-3",
      altText: "3D Design Site",
      tags: ["AJAX", "Responsive Web", "Boostrap"],
      repoLink: "https://github.com/anna-rosew/Blender-Art",
      liveLink: "https://blender-art.netlify.app/",
      date: "Nov 2023",
      image: require("./imgs/responsive-blender.png"),
    },
    {
      title: "Nam Joo Huh's Portfolio",
      className: "project-4",
      altText: "Nam Joo Huh's Portfolio",
      tags: ["Portfolio", "Responsive"],
      repoLink: "https://github.com/anna-rosew/Nam_Portfolio",
      liveLink: "https://dapper-raindrop-f7c20e.netlify.app/",
      date: "Sep 2023",
      image: require("./imgs/nam-joo-huh-portfolio.png"),
    },
    {
      title: "World Clock App",
      className: "project-5",
      altText: "World Clock App",
      tags: ["API Integration", "React.js", "NPM"],
      repoLink: "https://github.com/anna-rosew/world-clock",
      liveLink: "https://time-track-world.netlify.app/",
      date: "April 2023",
      image: require("./imgs/world-clock-app.png"),
    },
  ];

  return (
    <div className="work-section">
      <div className="container custom-padding">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <ProjectCard projectInfo={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
