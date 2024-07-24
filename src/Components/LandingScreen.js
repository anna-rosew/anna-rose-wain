import React from "react";
import "../Styles/LandingScreen.css";
import Header from "./Header";

import emoji from "../imgs/icons/robot.svg";

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
      <div className="text-container">
        <h2>
          I’M A JUNIOR FRONT-END DEVELOPER SPECIALISING IN INTERACTIVE
          INTERFACES.{" "}
        </h2>
      </div>
    </div>
  );
}
