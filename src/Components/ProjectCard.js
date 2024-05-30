import React from "react";
import "../Styles/App.css";

const ProjectCard = ({ projectInfo }) => {
  return (
    <div className="col-md-12">
      <a href={projectInfo.liveLink} alt={projectInfo.altText}>
        <div
          className={`custom-gap work-example-card ${projectInfo.className}`}
        >
          {/* Background image will be applied here */}
        </div>
      </a>
      <div className="project-caption">
        {projectInfo.tags.map((tag, index) => (
          <button key={index}>{tag}</button>
        ))}
        <a
          href={projectInfo.repoLink}
          alt={`${projectInfo.altText} Repo`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="github-link">GitHub Repo</button>
        </a>
        <a
          href={projectInfo.liveLink}
          alt={projectInfo.altText}
          target="_blank"
          rel="noreferrer"
        >
          <h3>{projectInfo.title}</h3>
        </a>
        <br />
        <p>{projectInfo.date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
