import React, { useState, useEffect } from "react";
import "../Styles/App.css";
import "../Styles/Hero.css";

import lightning from "../imgs/icons/";

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
        <p className="bio">
          {" "}
          <span className="line">
            <span>I’m Anna-Rose, I’m a</span>
            <span className="show-gif-on-hover">
              <svg src={lightning} alt="Lightning icon wiggling."></svg>
            </span>
          </span>
        </p>
      </div>
      <hr></hr>
    </div>
  );
}
