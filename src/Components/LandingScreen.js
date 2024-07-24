import React from "react";
import "../Styles/LandingScreen.css";
import Header from "./Header";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import emoji from "../imgs/icons/robot.svg";
import arrow from "../imgs/icons/arrow.svg";

export default function LandingScreen() {
  return (
    <div className="LandingScreen">
      <Header />
      <div className="title"></div>
      <div className="emoji">
        <img src={emoji} alt="Robot Gif" />
      </div>
      <h1>CREATIVE</h1>
      <h1>DEVELOPER/DESIGNER</h1>
      <div className="text-container" id="quote">
        I’M A JUNIOR FRONT-END DEVELOPER SPECIALISING IN INTERACTIVE INTERFACES.
      </div>
      <div className="arrow">
        <img src={arrow} alt="Arrow pointing down" />
      </div>
    </div>
  );
}

gsap.registerPlugin(TextPlugin);
