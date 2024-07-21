import React, { useState, useEffect } from "react";
import "../Styles/App.css";
import "../Styles/Hero.css";
import ContactButton from "../Components/ContactButton";

const spotlightSize = 200; // Define the size of the spotlight

export default function Hero() {
  const [spotlightStyle, setSpotlightStyle] = useState({
    left: "50%",
    top: "50%",
  });

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    setSpotlightStyle({
      left: `${x - spotlightSize / 2}px`,
      top: `${y - spotlightSize / 2}px`,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-container" id="about">
      <div className="spotlight" style={spotlightStyle}></div>
      <div className="hero">
        <h2 className="bio">
          <strong>
            I’m Anna-Rose, I’m a junior front-end developer who specializes in
            creating interactive custom websites. With a background in the arts,
            I love using javascript creatively to make unique user interfaces
            using clean code.
          </strong>{" "}
          <br />
          <br />
          Inclusivity and sustainability on the web are also very important to
          me. When I’m not neck deep in debugging, you’ll probably find me
          running up a hill somewhere.
          <br />
          <br />I love chatting about code, design and all things collaboration
          so say hello! ☻
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
          </div>
          <ContactButton />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
