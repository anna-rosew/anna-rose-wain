import React, { useEffect } from "react";
import "../Styles/App.css";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ projectInfo }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the image only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      // Preload both the initial and hover images
      const img1 = new Image();
      img1.src = projectInfo.image;
      const img2 = new Image();
      img2.src = projectInfo.hoverImage;
    }
  }, [inView, projectInfo.image, projectInfo.hoverImage]);

  return (
    <div className="col-md-12" ref={ref}>
      <a
        href={projectInfo.liveLink}
        alt={projectInfo.altText}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={`custom-gap work-example-card ${projectInfo.className}`}
        ></div>
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
        <h2>{projectInfo.subtitle}</h2>
        <br />
        <p>{projectInfo.date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
