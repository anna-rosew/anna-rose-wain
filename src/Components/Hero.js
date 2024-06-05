import React from "react";
import "../Styles/App.css";
import "../Styles/Hero.css";
import ContactButton from "../Components/ContactButton";

export default function Hero() {
  return (
    <div className="hero-container" id="about">
      <div className="hero">
        <h2 className="bio">
          <strong>
            Anna-Rose Wain is a front-end developer and digital artist based in
            Liverpool, England.
          </strong>{" "}
          Combining her BFA in Fine Art from{" "}
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
        <div className="details-container">
          <div className="row justify-content-start left-align">
            <div className="col-sm-6 col-md">
              <div className="summary-links">
                <h2>Get in touch</h2>
                <a
                  className="summary"
                  href="mailto:annarosewain9@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  alt="Email me"
                >
                  Email Me
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md">
              <div className="summary-links">
                <h2>GitHub</h2>
                <a
                  className="summary"
                  href="https://github.com/anna-rosew"
                  target="_blank"
                  rel="noreferrer"
                  alt="Link to GitHub Account"
                >
                  /anna-rosew
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md">
              <div className="summary-links">
                <h2>LinkedIn</h2>
                <a
                  className="summary"
                  href="https://www.linkedin.com/in/anna-rose-wain/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Link to LinkedIn account"
                >
                  /anna-rose-wain
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md">
              <div className="summary-links">
                <h2>SheCodes</h2>
                <a
                  className="summary"
                  href="https://www.shecodes.io/graduates/68516-anna-rose-wain"
                  target="_blank"
                  rel="noreferrer"
                  alt="Link to SheCodes account"
                >
                  Qualifications
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md">
              <div className="summary-links">
                <h2>CV</h2>
                <a
                  className="summary"
                  href="https://www.dropbox.com/scl/fi/4zxhf8sii29vgpqh33at7/Anna-Rose-Wain-s-CV-2024.pdf?rlkey=bes7qa9wphqf8do7cbb4klf0n&st=30qiwgwj&dl=0"
                  target="_blank"
                  rel="noreferrer"
                  alt="Link to CV"
                >
                  View Online
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md">
              <div className="summary-links">
                <h2>Other work</h2>
                <a
                  className="summary"
                  href="https://github.com/anna-rosew"
                  target="_blank"
                  rel="noreferrer"
                >
                  See some art
                </a>
              </div>
            </div>
          </div>
          <ContactButton />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
