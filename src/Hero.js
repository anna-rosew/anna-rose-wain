import React from "react";
import "./App.css";
import "./Hero.css";
import ContactButton from "./ContactButton.js";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <h2 className="bio">
          Anna-Rose Wain is a front-end developer and digital artist based in
          Liverpool, England. Combining her BFA in Fine Art from{" "}
          <a
            className="loughborough"
            href="https://www.lboro.ac.uk/schools/design-creative-arts/research-innovation/our-research/fine-art/"
            target="_blank"
            rel="noreferrer"
            alt="Loughborough University Link"
          >
            Loughborough University
          </a>{" "}
          with software engineering training, her projects prioritise thorough
          programming functionality and interactive user interfaces.
          <br />
          <br />
          Her practice is centred around inclusivity and collaboration. When
          she's not neck deep in debugging JavaScript, she enjoys getting into
          the mountains or watching a good film. ☻
        </h2>
        <ContactButton />
      </div>
      <hr></hr>
    </div>
  );
}
