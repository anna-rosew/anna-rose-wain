import React from "react";
import "../Styles/LandingScreen.css";
import Header from "./Header";

import emoji from "../imgs/icons/robot.svg";
import arrow from "../imgs/icons/arrow.svg";

export default function LandingScreen() {
  return (
    <div className="LandingScreen">
      <Header />

      <div className="title">
        {" "}
        <h1>Hi, I'm Anna,</h1>
        <span>
          <h1>a web developer</h1>
          <h1 className="small">based in Liverpool.</h1>
        </span>
      </div>
      <div className="nav-element">
        <div className="nav">
          <img src={emoji} alt="Robot Gif" className="robot-img" />
          <img src={arrow} alt="Arrow pointing down" className="arrow-img" />
        </div>
      </div>
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
        </div>
      </div>
    </div>
  );
}
