import React from "react";
import "./App.css";
import "./Hero.css";
import ContactButton from "./ContactButton.js";
import Marquee from "react-fast-marquee";

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
      <div className="crawler">
        <Marquee>
          {" "}
          JavaScript | HTML & CSS | Vanilla.js | React.js | REST APIs |
          Wireframing | UI/UX | Bootstrap | Responsive Web Design | Adobe
          Creative Suite | Git | Version Control | Blender 3D | VR/AR
          Development | C# | Three.js | Photoshop | p5.js | Yarn | NPM.js |
        </Marquee>
      </div>
      <hr></hr>
    </div>
  );
}
