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
      hoverImage: require("../imgs/blender-rookie2.png"),
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
      hoverImage: require("../imgs/sip-synth2.png"),
    },

    {
      title: "Weather App",
      subtitle: "Providing local live weather updates.",
      className: "project-3",
      altText: "Weather App",
      tags: ["App", "Boostrap", "Responsive"],
      repoLink: "https://github.com/anna-rosew/weather-app-final",
      liveLink: "https://skyline-forecast.netlify.app/",
      date: "May 2024",
      image: require("../imgs/weather-app.png"),
      hoverImage: require("../imgs/weather-app2.png"),
    },

    {
      title: "Rose Long: Return to the Source",
      subtitle: "Yoga and Life Coaching Website.",
      className: "project-4",
      altText: "Rose Long: Return to the Source",
      tags: ["eCommerce", "Branding", "Data Management/CMS", "SEO"],
      liveLink: "https://www.rose-long.com/",
      date: "Sep 2023 - Present",
      image: require("../imgs/rose-long.png"),
      hoverImage: require("../imgs/rose-long2.png"),
    },
    {
      title: "World Clock App",
      subtitle: "Tell the time wherever you are.",
      className: "project-5",
      altText: "World Clock App",
      tags: ["API Integration", "React.js", "NPM"],
      repoLink: "https://github.com/anna-rosew/world-clock",
      liveLink: "https://time-track-world.netlify.app/",
      date: "April 2023",
      image: require("../imgs/world-clock.png"),
      hoverImage: require("../imgs/world-clock2.png"),
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
