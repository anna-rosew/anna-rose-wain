import React from "react";
import "../Styles/App.css";
import "../Styles/Work.css";
import ProjectCard from "../Components/ProjectCard";

const WorkSection = () => {
  const projects = [
    {
      title: "Blender Rookie",
      subtitle: "Complete Guide to Learning Blender",
      className: "project-1",
      altText: "Blender Rookie Web App",
      tags: ["Website", "React.js", "3D", "NPM"],
      repoLink: "https://github.com/anna-rosew/blender-rookie",
      liveLink: "https://blender-rookie.netlify.app",
      date: "Jun 2024",
      image: require("../imgs/blender-rookie.png"),
    },

    {
      title: "Sip Synth",
      subtitle: "AI Cocktail Recipe Generator",
      className: "project-2",
      altText: "Cocktail Recipe Generator",
      tags: ["Web App", "UI/UX", "AI API"],
      repoLink: "https://github.com/anna-rosew/cocktail-recipe-generator",
      liveLink: "https://sip-synth.netlify.app/",
      date: "May 2024",
      image: require("../imgs/sip-synth.png"),
    },

    {
      title: "Weather App",
      subtitle: "Providing local live weather updates",
      className: "project-3",
      altText: "Weather App",
      tags: ["App", "Boostrap", "Responsive"],
      repoLink: "https://github.com/anna-rosew/weather-app-final",
      liveLink: "https://skyline-forecast.netlify.app/",
      date: "May 2024",
      image: require("../imgs/weather-app.png"),
    },

    {
      title: "Rose Long: Yoga and Coaching",
      subtitle: "Coming Soon",
      className: "project-4",
      altText: "Rose Long: Yoga and Coaching",
      tags: ["eCommerce", "Branding", "Data Management/CMS", "SEO"],
      date: "Sep 2023",
      image: require("../imgs/"),
    },
    {
      title: "World Clock App",
      className: "project-5",
      altText: "World Clock App",
      tags: ["API Integration", "React.js", "NPM"],
      repoLink: "https://github.com/anna-rosew/world-clock",
      liveLink: "https://time-track-world.netlify.app/",
      date: "April 2023",
      image: require("../imgs/world-clock-app.png"),
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
